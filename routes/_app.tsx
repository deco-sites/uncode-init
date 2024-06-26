import { asset, Head } from "$fresh/runtime.ts";
import { defineApp } from "$fresh/server.ts";
import Theme from "$store/sections/Theme/Theme.tsx";
import { Context } from "deco/deco.ts";

const sw = () =>
  addEventListener("load", () =>
    navigator && navigator.serviceWorker &&
    navigator.serviceWorker.register("/sw.js"));

export default defineApp(async (_req, ctx) => {
  const revision = await Context.active().release?.revision();

  return (
    <>
      {/* Include default fonts and css vars */}
      <Theme />

      {/* Include Icons and manifest */}
      <Head>
        {/* Enable View Transitions API */}
        <meta name="view-transition" content="same-origin" />

        {/* Tailwind v3 CSS file */}
        <link
          href={asset(`/styles.css?revision=${revision}`)}
          rel="stylesheet"
        />

        {/* Web Manifest */}
        <link rel="manifest" href={asset("/site.webmanifest")} />
      </Head>

      {/* Rest of Preact tree */}
      <ctx.Component />

      {/* Include service worker */}
      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: `(${sw})();` }}
      />
      {/* Tag <script> dentro do componente */}
      <script
        dangerouslySetInnerHTML={{
          __html: `

              var next = document.querySelector('.next-slide');
              var prev = document.querySelector('.prev-slide');
              var btnNext = document.querySelector('.btn-next');
              var btnPrev = document.querySelector('.btn-prev');
              if (btnNext) {
                next.addEventListener('click', function() {
                    btnNext.click();
                });
                
              }
              
              if (btnPrev) {
                prev.addEventListener('click', function() {
                    btnPrev.click();
                });
              
              }
              window.addEventListener('scroll', function() {
              var header = document.querySelector('header.home');
              if(header){
                var homeSection = document.querySelector('.home-section'); // Seletor da seção inicial
            
                // Verifica se estamos na página inicial e se a página foi rolada para baixo
                if ( window.scrollY > 0) {
                    header.classList.add('scroll'); // Adiciona a classe 'scroll' ao header
                } else {
                    header.classList.remove('scroll'); // Remove a classe 'scroll' caso contrário
                }
                
              }
              });


              // iframe
              const imgIframe = document.querySelector('.img-iframe');
              const blockIframe = document.querySelector('.block-iframe');
              if (imgIframe) {
                imgIframe.addEventListener('click', function() {
                  blockIframe.classList.add('flex');
                  blockIframe.classList.remove('hidden');
                });
              }
              if (blockIframe) {
                blockIframe.addEventListener('click', function() {
                  this.classList.remove('flex');
                  this.classList.add('hidden');
                });
              }

            `,
        }}
      >
      </script>
    </>
  );
});

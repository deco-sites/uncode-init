import { useId } from "$store/sdk/useId.ts";

export interface ContentProjects {
  title?: string;
  description?: string;
}

export interface Props {
  list?: ContentProjects[];
}

function ProjectsCount(props: Props) {
  const id = useId();

  const { list } = props; // Access list from props

  return (
    <div id={id} class="mt-16">
      <div class="container max-lg:hidden max-w-[1320px] py-[139px] pb-[139px] max-md:py-[30px] max-md:pb-[30px] rounded-[30px] lg:px-[5%] max-md:px-[10px]">
        <div class="grid md:grid-cols-3 grid-cols-1 mt-6 gap-[30px]">
          {list?.map(({ title, description }) => ( // Access title and description from each item in the list
            <div class="">
              <div class="card item-card">
                <div class="middle relative flex gap-[30px]">
                  {title && (
                    <h2 class="card-title text-[#1a1a1a] p-[13px_21px] w-[fit-content] text-[74px]">
                      {title}
                    </h2>
                  )}
                  {description && (
                    <p class="text-[17px] text-[#777777] max-w-[100px]">
                      {description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsCount;

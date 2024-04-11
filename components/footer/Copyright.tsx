export interface Copyright {
  text: string;
}

export default function Copyright({ content }: { content?: string }) {
  return (
    <>
      {content && (
        <span class="text-sm text-[#777777] font-normal">
          {content}
        </span>
      )}
    </>
  );
}

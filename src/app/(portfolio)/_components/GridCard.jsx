import Link from "next/link";

export default function GridCard({
  type,
  name,
  imageUrl,
  linkUrl = null,
  ...props
}) {
  return (
    <>
      {linkUrl != null ? (
        <Link
          href={linkUrl}
          target="_blank"
          aria-label={`go to ${name}`}
          className="relative col-span-1 min-h-[250px] p-[16px] flex justify-start items-end"
          {...props}
        >
          {/* Image Bg */}
          <div
            className="absolute inset-0 opacity-50 bg-center bg-cover bg-no-repeat rounded-xl"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          ></div>

          {/* Content */}
          <div className="absolute z-10 space-y-[4px]">
            <p className="font-bold text-[16px] sm:text-[18px]">{type}</p>
            <p className="font-medium text-white/70 text-[12px] sm:text-[14px]">
              {name}
            </p>
          </div>
        </Link>
      ) : (
        <div
          className="relative col-span-1 min-h-[250px] p-[16px] rounded-xl flex justify-start items-end"
          {...props}
        >
          {/* Image Bg */}
          <div
            className="absolute inset-0 opacity-50 bg-center bg-cover bg-no-repeat rounded-md"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          ></div>

          {/* Content */}
          <div className="absolute z-10 space-y-[4px]">
            <p className="font-bold text-[16px] sm:text-[18px]">{type}</p>
            <p className="font-medium text-white/70 text-[12px] sm:text-[14px]">
              {name}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

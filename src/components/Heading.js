import clsx from "clsx";

export function Heading({
  as: Comp = "h1",
  size/*  = "8xl" */,
  children,
  className,
}) {
  return (
    <Comp
      className={clsx(
        "",
        size === "8xl" && "text-5xl md:text-[5rem]",
        size === "6xl" && "text-4xl md:text-6xl",
        size === "4xl" && "text-[1.9rem] md:text-6xl",
        size === "2xl" && "text-2xl",
        className
      )}
    >
      {children}
    </Comp>
  );
}

import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { gridItems } from "@/data";

export const Grid = () => {
  return (
    <section id={"about"}>
      <BentoGrid className="w-full py-20">
        {gridItems.map(
          (
            {
              id,
              title,
              titleClassName,
              description,
              className,
              img,
              imgClassName,
              spareImg,
            },
            i,
          ) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          ),
        )}
      </BentoGrid>
    </section>
  );
};

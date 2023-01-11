import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/hover_logo_letters.svg").default,
    description: (
      <>
        Hover focuses on easy to use battries included method, so use it as you
        would use a native element, no need to learn fancy complex apis to do
        simple things.
      </>
    )
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/hover_logo_letters.svg").default,
    description: (
      <>
        Easily extend the components and use it to conform to your brand
        identity.
      </>
    )
  },
  {
    title: "Platform agnostic",
    Svg: require("@site/static/img/hover_logo_letters.svg").default,
    description: (
      <>
        Hover uses vanilla extract behind the hood, meainig most of the styles
        are platform agnostic, if it can run css and js then hover works!
      </>
    )
  }
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>

      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

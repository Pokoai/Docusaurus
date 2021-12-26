import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '好好学习',
    Svg: require('../../static/img/undraw_freelancer_re_irh4.svg').default,
    description: (
      <>
        深刻贯彻 破壳Ai 终身学习、系统性学习思想，一切学习都是为了突破认知屏障
      </>
    ),
  },
  {
    title: '努力工作',
    Svg: require('../../static/img/undraw_programming_re_kg9v.svg').default,
    description: (
      <>
        工作是个人发展过程中的一个跳板，控制工作，而非让工作奴役你
      </>
    ),
  },
  {
    title: '每天运动',
    Svg: require('../../static/img/undraw_healthy_habit_bh-5-w.svg').default,
    description: (
      <>
        最重要的地基，不用多说，又必须得多说。每天运动，从孩子抓起
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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

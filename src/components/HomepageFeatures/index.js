import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
	{
		title: 'Easy to Use',
		Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
		description: (
			<>
				The HR Information Management API is an important tool to help businesses manage HR-related information easily and efficiently.
			</>
		),
	},
	{
		title: 'Convenient',
		Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
		description: (
			<>
				The HR information management API makes personnel management faster, more accurate and convenient, and also minimizes errors caused by manual data entry.
			</>
		),
	},
	{
		title: 'Export to Excel',
		Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
		description: (
			<>
				Extend or customize your website layout by reusing React. Docusaurus can
				be extended while reusing the same header and footer.
			</>
		),
	},
];

function Feature({ Svg, title, description }) {
	return (
		<div className={clsx('col col--4')}>
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
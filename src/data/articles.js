import React from "react";

function article_1() {
	return {
		date: "15 Oktober 2022",
		title: "IT camp",
		description:
			"Pada tanggal 15 Oktober 2022 Biro TI mengadakann acara IT Camp yang diikuti oleh seluruh anggota biro TI",
		keywords: [
			"event pertama"
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "26 Februari 2023",
		title: "BAKTI MASYARAKAT",
		description:
			"Pada tanggal 26 Februari 2023 Biro TI mengadakan acara bakti masyarakat yang bertempat didesa kanyoran kabupaten Kediri",
		keywords: [
			"event kedua"
		],
		style: `
			.article-content {
				display: flex;
				flex-direction: column;
				align-items: center;
			}

			.randImage {
				align-self: center;
				outline: 2px solid red;
			}
			`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<h1>Content of article 2</h1>
				</div>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "13 Mai 2023",
		title: "PELATIHAN CODING ANDROID",
		description:
			"Pada tanggal 13 Mei 2023 Biro TI mengadakan pelatihan coding dasar android brebasis Java",
		keywords: [
			"event ketiga"
		],
		style: `
			.article-content {
				display: flex;
				flex-direction: column;
				align-items: center;
			}

			.randImage {
				align-self: center;
				outline: 2px solid red;
			}
			`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<h1>Content of article 2</h1>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2, article_3];

export default myArticles;

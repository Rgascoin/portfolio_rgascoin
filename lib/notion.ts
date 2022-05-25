import { Client } from '@notionhq/client';
import { NotionAPI } from 'notion-client';

async function postsList() {
	const client = new Client({ auth: process.env.NOTION_KEY });
	const myPosts = await client.databases.query({
		database_id: process.env.NOTION_DATABASE as string,
		filter: {
			property: 'Published',
			checkbox: {
				equals: true,
			},
		},
		sorts: [
			{
				property: 'Date',
				direction: 'descending',
			},
		],
	});
	return myPosts;
}

async function getPost(pageId: any) {
	const notion = new NotionAPI();
	const page = await notion.getPage(pageId);

	return page;
}

export { postsList, getPost };

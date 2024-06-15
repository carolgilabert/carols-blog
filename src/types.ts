
type Author = {
    type: "card",
    name: string,
    photo: string,
    url: string,
};

type Content = {
    html: string,
    text: string,
}

export type Like = {
    type: "entry",
    author: Author,
    url: string,
    published: string | null,
    "wm-received": string,
    "wm-id": number,
    "wm-source": string,
    "wm-target": string,
    "wm-protocol": string,
    "like-of": string,
    "wm-property": "like-of",
    "wm-private": boolean,
};

export type Repost = {
    type: "entry",
    author: Author,
    url: string,
    published: string,
    "wm-received": string,
    "wm-id": number,
    "wm-source": string,
    "wm-target": string,
    "wm-protocol": string,
    content: Content,
    "repost-of": "repost-of",
    "wm-property": string,
    "wm-private": boolean,
};

export type Reply = {
    type: "entry",
    author: Author,
    url: string,
    published: string,
    "wm-received": string,
    "wm-id": number,
    "wm-source": string,
    "wm-target": string,
    "wm-protocol": string,
    content: Content,
    "in-reply-to": string,
    "wm-property": "in-reply-to",
    "wm-private": boolean,
};

export type Webmention = Like | Repost | Reply;
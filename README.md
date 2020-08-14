<p align="center">
    <a href="https://github.com/Alissonsleal/Reddit-API-to-JSON/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/Alissonsleal/Reddit-API-to-JSON?color=sucess&style=flat-square"></a>
    <a href="https://github.com/Alissonsleal/Reddit-API-to-JSON/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/Alissonsleal/Reddit-API-to-JSON?color=sucess&style=flat-square"></a>
    <a href="https://github.com/Alissonsleal/Reddit-API-to-JSON/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/Alissonsleal/Reddit-API-to-JSON?color=sucess&style=flat-square"></a>
    <a href="https://github.com/Alissonsleal/Reddit-API-to-JSON/blob/master/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/Alissonsleal/Reddit-API-to-JSON?color=sucess&style=flat-square"></a>
    <a href="https://github.com/Alissonsleal/"><img alt="Alisson Leal GitHub Profile" src="https://img.shields.io/badge/made%20by-Alisson%20Leal-sucess?style=flat-square&logo=appveyor"></a>
</p>

# Reddit API to JSON

### Table Of Contents

- [Description](#description)
- [How To Use](#how-to-use)
- [References](#references)
- [License](#license)
- [Author Info](#author-info)

---

## Description

Make a simple JSON file from the Reddit API without the need of any OAuth parameter. It is limited to 25 Reddit Posts at a time.

[Back To The Top](#Reddit-API-to-JSON)

---

#### Tecnologies

- Vanilla Javascript
- Node.js
- Node-fetch

[Back To The Top](#Reddit-API-to-JSON)

---

## How To Use

#### Instalation

You need Node.js for this.
Open your terminal and run "npm install" or "yarn install" to install all dependencies (we only need node-fetch).

#### Creating the JSON

After setting it up to what you need/want, you just need to open the terminal and run the following command:

`npm run json`

The reddit.json file will be created/updated inside the root folder.

#### API Reference

To get a simple JSON with only the title and content of the post, you just need to change the following variables:

```js
const subreddit = "Jokes"; // subreddit name goes here
const filter = "top"; // filter options are(new, hot, top, rising)
const age = "all"; // options are(hour, day, week, month, year, all)
```

If you need more than just the title and content of the post, you can change the content inside apiContent.push() as follows:

```js
apiContent.push(
  `
  {
    "title": "${cleaner(fullContent.title)}",
    "body": "${cleaner(fullContent.selftext)}",
    "OPTION_NAME": "${cleaner(fullContent.API_OPTION)}
  }`
);
```

You can name OPTION_NAME to whatever you want/need.

The API_OPTIONS are as follows:

###### Retrieved from [Reddit public .json API](https://www.reddit.com/r/all/top/.json?t=all)

- approved_at_utc
- subreddit
- selftext
- author_fullname
- saved
- mod_reason_title
- gilded
- clicked
- title
- link_flair_richtext
- subreddit_name_prefixed
- hidden
- pwls
- link_flair_css_class
- downs
- thumbnail_height
- top_awarded_type
- hide_score
- name
- quarantine
- link_flair_text_color
- upvote_ratio
- author_flair_background_color
- subreddit_type
- ups
- total_awards_received
- media_embed
- thumbnail_width
- author_flair_template_id
- is_original_content
- user_reports
- secure_media
- is_reddit_media_domain
- is_meta
- category
- secure_media_embed
- link_flair_text
- can_mod_post
- score
- approved_by
- author_premium
- thumbnail
- edited
- author_flair_css_class
- author_flair_richtext
- gildings
- post_hint
- content_categories
- is_self
- mod_note
- created
- link_flair_type
- wls
- removed_by_category
- banned_by
- author_flair_type
- domain
- allow_live_comments
- selftext_html
- likes
- suggested_sort
- banned_at_utc
- url_overridden_by_dest
- view_count
- archived
- no_follow
- is_crosspostable
- pinned
- over_18
- preview (there's inside this one)
- all_awardings
- awarders
- media_only
- can_gild
- spoiler
- locked
- author_flair_text
- treatment_tags
- visited
- removed_by
- num_reports
- distinguished
- subreddit_id
- mod_reason_by
- removal_reason
- link_flair_background_color
- id
- is_robot_indexable
- report_reasons
- author
- discussion_type
- num_comments
- send_replies
- whitelist_status
- contest_mode
- mod_reports
- author_patreon_flair
- author_flair_text_color
- permalink
- parent_whitelist_status
- stickied
- url
- subreddit_subscribers
- created_utc
- num_crossposts
- media
- is_video

We haven't tested all of these, feel free to test them and issue if any of them aren't working properly.

[Back To The Top](#Reddit-API-to-JSON)

---

## References

We are using [Node.js](https://nodejs.org/) to power it up.
And we are currently using the [Node-fetch](https://www.npmjs.com/package/node-fetch) dependency to fetch the .json file from the Public Reddit .json API

[Back To The Top](#Reddit-API-to-JSON)

---

## License

MIT License

Copyright (c) 2020 Alisson Leal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[Back To The Top](#read-me-template)

---

## Author Info

- Twitter - [@alissonsleal](https://twitter.com/alissonsleal)
- Discord - [Alisson#0629](https://discord.com/)

[Back To The Top](#read-me-template)

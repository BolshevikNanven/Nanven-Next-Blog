import http from 'http'

import cheerio from 'cheerio'
import friendData from '../data/friendsdata';


friendData.map((e) => {

    http.get(e.href, (res) => {

        let html = '';

        res.on('data', (data) => {
            html += data;
        });

        res.on('end', () => {
            filterChapters(html);
        })

    })
})


export async function filterChapters(html) {
    let $ = cheerio.load(html);
    let icon = $('div')

    return icon;


}


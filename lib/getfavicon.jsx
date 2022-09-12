import http from 'http'

import cheerio from 'cheerio'
import friendData from '../data/friendsdata';

var url=[];

friendData.map((e)=>{
    
    http.get(e.href,(res)=>{

        var html='';

        res.on('data',(data)=>{
            html += data;
        });

        res.on('end',()=>{
            filterChapters(html);
        })

    })
})


export async function filterChapters(html){
    var $ =cheerio.load(html);
    var icon=$('div')

    return icon;
    
    
}


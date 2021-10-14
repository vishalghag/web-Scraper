const PORT = 8000

const axios = require('axios')
const cheerio = require('cheerio')
const { response } = require('express')
const express = require('express')

const app = express()

const url = "https://www.theguardian.com/uk"

axios(url)
            .then(response =>{
                const html = response.data
                 const $ = cheerio.load(html)
                const articles = []
                const article = []

             $('.fc-item__content', html).each(function(){
                const url =   $(this).find('a').attr('href')
               articles.push({

                     url
                 })
               })

               
             $('.fc-item__title', html).each(function(){
               const title = $(this).text()
              article.push({
                 title
                })
              })


               console.log(articles)
               console.log(article)
            }).catch(err =>console.log(err))

app.listen(PORT, () => console.log(`server running on port ${PORT}`))





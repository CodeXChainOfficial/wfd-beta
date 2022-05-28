import { Flex, SimpleGrid, Text } from '@chakra-ui/react'
import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'

import BlogCard from '../../components/Blog/BlogCard'

interface BlogPageProps {

}

const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@wefundofficial";

interface FeedItem {
  title: string
  pubDate: Date
  link: string
  guid: string
  author: string
  thumbnail: string
  description: string
  content: string
  enclosure: string[]
  categories: string[]

  avatar?: string
  profileLink?: string
}

const BlogPage = function (props: BlogPageProps) {
  
  const [items, setItems] = useState<FeedItem[]>([])

  async function getData() {
    try {
      const response = await axios.get(mediumURL)
      const {data} = response

      const {status, feed, items} = data

      if (status !== 'ok') {
        // Failed get feed
        return
      }

      const {avatar, link} = data.feed

      const posts = items.filter((item:FeedItem) => item.categories.length > 0)
        .map((item:FeedItem) => {
          item.avatar = avatar
          item.profileLink = link
          return item
        })

      setItems(posts)

    } catch(e) {

    }
    
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div 
    style=
    {{background:"linear-gradient(90deg, #1F0021 0%, #120054 104.34%)", 
    width:'100%', 
    color:'white', 
    fontSize:'18px', 
    fontFamily:'Sk-Modernist-Regular', 
    fontWeight:'500' }}>
        <div 
        style=
        {{backgroundImage:"url('/media/createproject_banner_emphasis.svg')", 
        width:'100%', 
        zIndex:'10'}}>
        <div 
        style=
        {{
          backgroundImage:"url('/media/createproject_banner.svg')", 
          position:'absolute', 
          top:'80px', 
          width:'100%', 
          zIndex:'11', 
          backgroundPosition:'center', 
          backgroundRepeat:'no-repeat', 
          backgroundSize:'cover', 
        }}>
        <Flex
        pt='95px' 
        justify="center">
            <Text
            fontSize='16px' 
            fontWeight='normal' 
            color={'rgba(255, 255, 255, 0.54)'}>
                Home &gt;&nbsp;
            </Text>
            <Text 
            fontSize='16px' 
            color={'rgba(255, 255, 255, 0.84)'}>
                Blog
            </Text>
        </Flex>
        <Flex 
            mt='11px' pb='55px'
            mb="20px" justify='center'
            style={{fontFamily:'PilatExtended-Bold'}}>
            <Text 
            fontSize={{base:'20px',sm:'24px',md:'35px',lg:'40px'}}
            color='#4790f5'>
                Blog Stories
            </Text>
            <Text fontSize={{base:'20px',sm:'24px',md:'35px',lg:'40px'}}>   
                &nbsp;of WeFund
            </Text>
        </Flex>
        </div>
        </div>
        <SimpleGrid
        p={{
            base: 2,
            md: 2,
            lg: 25
        }}
        mt={'300px'}
        w="full"
        alignItems="center"
        justifyContent="center"
        alignContent='center'
        spacing="6"
        columns={{
            base: 1,
            md: 2,
            lg: 2,
            xl: 3,
        }}
        >
            {items.map((item, key) =>
              
              <BlogCard {...item} key={key} />
            )}
        </SimpleGrid>
    </div>
  )
}

export default BlogPage
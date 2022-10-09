import { Box, Flex, SimpleGrid, Text, Image, Center } from "@chakra-ui/react";
import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";

import BlogCard from "../../components/Blog/BlogCard";
import Footer from "../../components/Footer";
import Highlights from "../../components/Launchpad/Highlights";
import PageLayout from "../../components/PageLayout";

const mediumURL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@wefundofficial";

export interface FeedItem {
  title: string;
  pubDate: Date;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: string[];
  categories: string[];

  avatar?: string;
  profileLink?: string;
}

const BlogPage = function () {
  const [items, setItems] = useState<FeedItem[]>([]);

  async function getData() {
    try {
      const response = await axios.get(mediumURL);
      const { data } = response;

      const { status, feed, items } = data;

      if (status !== "ok") {
        // Failed get feed
        return;
      }

      const { avatar, link } = data.feed;

      const posts = items
        .filter((item: FeedItem) => item.categories.length > 0)
        .map((item: FeedItem) => {
          item.avatar = avatar;
          item.profileLink = link;
          return item;
        });

      setItems(posts);
    } catch (e) {}
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <PageLayout
      title=""
      subTitle1="Highlight"
      subTitle2="&nbsp;of WeFund"
      subTitle3=""
    >
      <div
        style={{
          width: "100%",
          color: "white",
          fontSize: "18px",
          fontFamily: "Sk-Modernist-Regular",
          fontWeight: "500",
        }}
      > 
        <Highlights />
        <Center mt={{ base: "-10vh", md: "-24vh", lg: "-80vh", '2xl': "-88vh" }}>
        <video autoPlay muted loop>
          <source src="/media/starrybackground.webm" type="video/webm"></source>
        </video>
      </Center>
        <Center zIndex="20" mt="128px">
          <SimpleGrid
            p={{
              base: 2,
              md: 2,
              lg: 24,
            }}
            mb="-20"
            bg="#070016"
            w="100%"
            alignItems="center"
            justifyContent="center"
            alignContent="center"
            spacing="6"
            columns={{
              base: 1,
              md: 2,
              lg: 2,
              xl: 3,
            }}
          >
            {items.map((item, key) => (
              <BlogCard {...item} key={key} />
            ))}
          </SimpleGrid>
        </Center>
      </div>
      <Footer />
    </PageLayout>
  );
};

export default BlogPage;

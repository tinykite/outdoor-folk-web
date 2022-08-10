import { useLoaderData } from "@remix-run/react";
import { config } from "~/lib/sanity/config";
import urlBuilder from "@sanity/image-url";
import { getClient } from "~/lib/sanity/getClient";
import styled from "styled-components";
import { Link } from "@remix-run/react";
import NewsletterForm from "~/components/NewsletterForm";

const urlFor = (source: any) => urlBuilder(config).image(source);

const Main = styled.main`
  width: 90%;
  margin: 0 auto;

  @media (min-width: 65rem) {
    width: 100%;
  }
`;

const FeaturedArticle = styled.article`
  display: grid;
  justify-items: center;
`;

const Intro = styled.p`
  text-align: center;
  margin: 3rem auto;
  max-width: 60rem;
  font-size: 1.25rem;
  font-family: "termina", sans-serif;
  font-weight: 400;
  line-height: 1.5;

  @media (min-width: 50rem) {
    font-size: 2rem;
    margin: 5rem auto;
  }
`;

const FeaturedArticleType = styled.p`
  font-size: 0.875rem;
  text-transform: uppercase;
  font-family: "termina", sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
`;

const FeaturedArticleTitle = styled.h2`
  font-family: "termina", sans-serif;
  font-weight: 600;
  max-width: 30rem;
  margin-top: 0.25rem;

  @media (min-width: 50rem) {
    font-size: 2rem;
  }

  a:not(:hover, :active) {
    text-decoration: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const FeaturedArticleHeader = styled.hgroup`
  text-align: center;
  margin: 1.5rem auto 0;
  display: grid;
  justify-items: center;
  line-height: 1.25;
`;

const FeaturedArticleDescription = styled.p`
  max-width: 40rem;
  margin-top: 0.5rem;
  font-family: "termina", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5;

  @media (min-width: 50rem) {
    font-size: 1rem;
  }
`;

export function meta() {
  return {
    title: "Outdoor Folk",
    description:
      "Outdoor Folk is an experiment in telling stories about creativity, community, and place.",
  };
}

export async function loader() {
  const posts = await getClient().fetch(
    `*[_type == "post"]{ _id, title, slug, body, description, previewImage, postType }`
  );

  return { posts };
}

export default function Index() {
  let { posts } = useLoaderData();
  const featuredArticle = posts[0];

  return (
    <Main>
      <Intro>
        Outdoor Folk is an experiment in telling stories about the intersection
        of creativity, community, and place.
      </Intro>
      <FeaturedArticle key={featuredArticle.title}>
        <Link to={featuredArticle.slug.current}>
          <img
            src={urlFor(featuredArticle.previewImage)
              .width(750)
              .height(500)
              .fit("crop")
              .auto("format")
              .url()}
            alt={featuredArticle.previewImage.alt}
          />
        </Link>
        <FeaturedArticleHeader>
          <FeaturedArticleType>{featuredArticle.postType}</FeaturedArticleType>
          <StyledLink to={featuredArticle.slug.current}>
            <FeaturedArticleTitle>{featuredArticle.title}</FeaturedArticleTitle>
          </StyledLink>
          <FeaturedArticleDescription>
            {featuredArticle.description}
          </FeaturedArticleDescription>
        </FeaturedArticleHeader>
      </FeaturedArticle>
      <NewsletterForm />
    </Main>
  );
}

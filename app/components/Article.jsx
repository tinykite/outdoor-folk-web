import { PortableText } from "@portabletext/react";
import styled from "styled-components";
import { config } from "~/lib/sanity/config";
import urlBuilder from "@sanity/image-url";

const urlFor = (source) => urlBuilder(config).image(source);

const CenteredDivider = styled.div`
  text-align: center;
`;

const Container = styled.article`
  width: 90%;
  margin: 2rem auto 0;

  @media (min-width: 45rem) {
    width: 100%;
    margin: 4rem auto 0;
  }
`;

const Headline = styled.h1`
  font-family: "termina", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 2rem;
  text-align: center;
  line-height: 1.2;
  margin: 0 auto;

  @media (min-width: 30rem) {
    font-size: clamp(2rem, 4vw + 1rem, 4rem);
  }

  @media (min-width: 40rem) {
    max-width: 35rem;
  }

  @media (min-width: 50rem) {
    max-width: 40rem;
  }

  @media (min-width: 55rem) {
    max-width: 50rem;
  }
`;

const Description = styled.p`
  font-family: "termina", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1rem;
  text-align: center;
  max-width: 700px;
  margin: 1.25rem auto 0;

  @media (min-width: 30rem) {
    font-size: 1.25rem;
  }
`;

const Main = styled.main`
  margin: 2rem auto 2rem;
  display: grid;
  grid-template-columns:
    1fr
    min(60ch, 100%)
    1fr;

  // Turns out it's a myth that * isn't performant!
  // And this prevents a grid-column from needing to be defined for all elements
  & > * {
    grid-column: 2;
  }

  // These need to be refactored out
  p {
    line-height: 1.5;
  }

  p + p {
    margin-top: 1.25rem;

    @media (min-width: 45rem) {
      margin-top: 1.5rem;
    }
  }
`;

const ImageContainer = styled.div`
  grid-column: 1/-1;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: ${(props) =>
    props.display === "single" ? "1fr" : "1fr 1fr"};
  grid-gap: 0.5rem;

  @media (min-width: 30rem) {
    margin-top: ${(props) =>
      props.display !== "1x2xbottom" ? "clamp(2rem, 4vw + 1rem, 8rem)" : "0px"};
    margin-bottom: ${(props) =>
      props.display !== "1x2xtop" ? "clamp(2rem, 4vw + 1rem, 8rem)" : "2rem"};

  @media (min-width: 40rem) {
    grid-gap: 2rem;
  }
`;

const Image = styled.img`
  // 45vw + 45vw = 90%
  // Subtracting 2rem accomodates the column-gap
  width: ${(props) =>
    props.display === "single" ? "50vw" : "calc(45vw - 0.5rem)"};
  max-width: 50rem;
  margin: 0 auto;

  @media (min-width: 45rem) {
    width: 40vw;
  }
`;

const ImageCaption = styled.div`
  grid-column: 1/-1;
  margin: 0 auto;
  font-size: 1rem;
  font-style: italic;
  text-align: center;
  width: 90vw;

  @media (min-width: 50rem) {
    width: 50vw;
  }

  @media (min-width: 100rem) {
    width: 30vw;
    max-width: 40rem;
  }
`;

const ImageCredit = styled.div`
  text-align: center;
  font-style: italic;
  margin-top: 0rem;
`;

const ImageGrid = ({ images, display, caption }) => {
  return (
    <ImageContainer display={display}>
      {images.map((image) => (
        <Image
          display={display}
          src={urlFor(image)
            .width(900)
            .height(900)
            .fit("crop")
            .auto("format")
            .url()}
          key={image.alt}
          alt={image.alt}
        />
      ))}
      {caption && (
        <ImageCaption>
          <p>{caption}</p>
        </ImageCaption>
      )}
    </ImageContainer>
  );
};

const components = {
  types: {
    imageGrid: (props) => {
      const { images, display, caption, imageCredit } = props.value;
      return (
        <ImageGrid
          images={images}
          display={display}
          caption={caption}
          imageCredit={imageCredit}
        />
      );
    },
    image: (props) => {
      const imageData = props.value;
      return (
        <img
          src={urlFor(imageData)
            .width(900)
            .height(900)
            .fit("crop")
            .auto("format")
            .url()}
          key={imageData.alt}
          alt={imageData.alt}
        />
      );
    },
  },
  marks: {
    center: ({ children }) => <CenteredDivider>{children}</CenteredDivider>,
  },
};

export default function Article({ content, ...props }) {
  return (
    <Container {...props}>
      <Headline>{content?.title ? content.title : null}</Headline>

      {content?.description ? (
        <Description>{content?.description}</Description>
      ) : null}
      {content?.body ? (
        <Main>
          <PortableText value={content?.body} components={components} />
        </Main>
      ) : null}
      {content?.imageCredit ? (
        <ImageCredit>All photos courtesy {content.imageCredit}</ImageCredit>
      ) : null}
    </Container>
  );
}

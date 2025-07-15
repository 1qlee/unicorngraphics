import styles from "./Hero.module.scss";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { BlockContent } from "@/root/sanity.types";
import { Box, Flex, Section } from "@radix-ui/themes";
import { CustomPortableText } from "../CustomPortableText/CustomPortableText";
import ResponsiveContainer from "../ResponsiveContainer/ResponsiveContainer";
import ImageBox from "../ImageBox/ImageBox";
import { type HOME_QUERYResult } from "@/root/sanity.types";

interface HeroProps {
  data: HOME_QUERYResult;
}

function VideoHero({ data }: HeroProps) {
  const heroSection = data?.heroSection;
  const heroContent = heroSection?.heroContent;
  const heroVideo = heroSection?.heroVideo;
  const heroVideoUrl = heroVideo?.asset?.url;
  const heroVideoMimeType = heroVideo?.asset?.mimeType;
  const heroVideoThumbnailUrl = heroVideo?.alt?.asset?.url;
  const heroVideoLqip = heroVideo?.alt?.asset?.metadata?.lqip;

  return (
    <Section py="0">
      <ResponsiveContainer flexGrow="1" flexShrink="1">
        <Flex direction="row" wrap="wrap">
          {heroVideoUrl ? (
            <Flex p="4" flexBasis="66%" flexGrow="1" flexShrink="1">
              <video
                autoPlay // Start playing automatically
                loop // Loop the video
                muted // ESSENTIAL: Mute the video to allow autoplay
                playsInline // ESSENTIAL: Allow playback on iOS without going fullscreen
                poster={heroVideoThumbnailUrl || heroVideoLqip || undefined} // Fallback to LQIP or nothing
                className={styles.Video} // Apply CSS for positioning/styling
              >
                {/* Provide the source with the correct MIME type */}
                <source
                  src={heroVideoUrl}
                  type={heroVideoMimeType || "video/mp4"}
                />
                {/*
            Optional: Add a WebM source for better compression and broader browser support
            You'd need to encode your video into WebM as well and upload it to Sanity,
            then query for its URL. For simplicity, we're sticking to MP4 for now.
            <source src={heroVideoWebmUrl} type="video/webm" />
          */}
                Your browser does not support the video tag.
              </video>
            </Flex>
          ) : (
            // Fallback: If no video URL, display the thumbnail image or LQIP as a static background
            <div
              className="background-fallback-image"
              style={{
                backgroundImage: `url(${heroVideoThumbnailUrl || heroVideoLqip || "path/to/default-fallback-image.jpg"})`,
              }}
              // You might add an alt text here if it's available and meaningful
              // aria-label="Hero background image"
              role="img"
            ></div>
          )}
          <Flex
            flexBasis="34%"
            flexGrow="1"
            flexShrink="0"
            align="center"
            justify="center"
            direction="column"
          >
            <Box p="4" className={styles.Content}>
              {heroContent && (
                <CustomPortableText align="left" value={heroContent} />
              )}
            </Box>
          </Flex>
        </Flex>
      </ResponsiveContainer>
    </Section>
  );
}

export default VideoHero;

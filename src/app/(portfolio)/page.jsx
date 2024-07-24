import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import FormatTimeContainer from "@/components/ui-custom/FormatTimeContainer";
import StackIcon from "tech-stack-icons";
import { techStackLogo } from "@/lib/data";

import { Separator } from "@/components/ui/separator";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Highlight } from "@/components/ui/hero-highlight";
import BlurFade from "@/components/magicui/blur-fade";
import BgParticles from "@/components/magicui/BgParticles";

import HeadSection from "@/components/ui-custom/HeadSection";
import AvailableForWork from "@/components/ui-custom/AvailableForWork";

import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function PortfolioPage() {
  return (
    <main className="pt-[100px]">
      <Hero />
      <Separator className="bg-primary" />
      <About />
      <Education />
      <ProjectWork />
      <TechStack />
      <ContactMe />
    </main>
  );
}

function Hero() {
  return (
    <>
      {/* Wrapper */}
      <div id="hero" className="relative overflow-hidden">
        <BgParticles />

        {/* Content */}
        <div className="max-w-[1280px] mx-auto min-h-[90vh] px-[24px] md:px-[40px] lg:px-[80px] py-[80px] flex flex-col justify-center gap-[60px]">
          <BlurFade delay={0.4} inView className="space-y-[20px]">
            <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px]">
              Hi, this is&nbsp;
              <span className="font-bold">Richards Griffiano</span>
            </h1>
            {/* Divider */}
            <Separator className="w-[20%] bg-pf-yellow" />
            <p className="text-[20px] md:text-[24px] lg:text-[32px]">
              I&lsquo;m an&nbsp;
              <Highlight className="font-semibold text-primary">
                freelance web developer
              </Highlight>
              <br />I created a solution with a website.
            </p>
          </BlurFade>

          {/* Work Availebelity */}
          <BlurFade
            delay={0.4}
            inView
            className="leading-normal flex flex-col md:flex-row items-start md:items-center gap-[12px]"
          >
            <AvailableForWork available={true} />
            <p className="font-medium text-[14px] sm:text-[16px]">
              Based in Manado, Indonesia&nbsp;-&nbsp;
              <FormatTimeContainer />
            </p>
          </BlurFade>
        </div>
      </div>
    </>
  );
}

function About() {
  return (
    <>
      <div
        id="about"
        className="relative max-w-[1280px] mx-auto h-auto px-[24px] md:px-[40px] lg:px-[80px] py-[80px] flex flex-col items-center gap-[40px]"
      >
        <BlurFade delay={0.4} inView>
          <HeadSection>
            About&nbsp;<span className="text-pf-blue">Me</span>
          </HeadSection>
        </BlurFade>

        <BlurFade
          delay={0.4}
          inView
          className="flex flex-col md:flex-row justify-start md:justify-between items-center md:items-start gap-[40px]"
        >
          {/* Profile Picture */}
          <div className="relative min-w-[200px] sm:min-w-[280px] min-h-[200px] sm:min-h-[280px] flex justify-center items-center overflow-hidden">
            <Image
              src="/profil-mask.svg"
              alt="richards-picture"
              fill
              quality={75}
              placeholder="blur"
              blurDataURL={"/profil-mask.svg"}
            />
          </div>
          <div className="text-[16px] lg:text-[18px] space-y-[16px]">
            <p>
              I&lsquo;m specializing in web development, based in Manado,
              Indonesia. l&lsquo;m also a fresh graduate from University of
              Technology North Sulawesi with a degree in Bachelor Of Tecnology.
            </p>
            <p>
              I can create attractive and user-friendly website that can help
              businesses or individual to achieve their goal. I&lsquo;m
              passionate to expanding my knowledge and skills in web development
              and learning new technology to improve the quality of my work.
            </p>
            <p>Feel free to reach me out below...</p>
            <div className="flex items-center gap-[8px]">
              <Link href="" aria-label="go to Email">
                <FaEnvelope className="text-[32px]" />
              </Link>
              <Link href="" aria-label="go to LinkedIn">
                <FaLinkedin className="pl-[4px] text-[30px]" />
              </Link>
              <Link href="" aria-label="go to Instagram">
                <AiFillInstagram className="text-[34px]" />
              </Link>
            </div>
          </div>
        </BlurFade>
      </div>
    </>
  );
}

// For "Education" section
const listEducation = [
  {
    school: "SMA N 9 BINSUS MANADO",
    year: "2016 - 2019",
    target: "", // set null, if no target or empty string
    separator: true,
  },
  {
    school: "UNIVERSITAS TEKNOLOGI SULAWESI UTARA",
    year: "2019 - 2023",
    target: "Bachelor Degree of Technology - Sarjana Teknik (ST)",
    separator: false,
  },
];

function Education() {
  return (
    <>
      <div
        id="education"
        className="relative max-w-[1280px] mx-auto h-auto px-[24px] md:px-[40px] lg:px-[80px] py-[80px] flex flex-col items-center gap-[40px]"
      >
        <BlurFade delay={0.4} inView className="w-full">
          <HeadSection className="text-[20px] md:text-[32px]">
            Education
          </HeadSection>
        </BlurFade>

        {/* Education List */}
        <BlurFade
          delay={0.4}
          inView
          className="w-full flex flex-col gap-[16px]"
        >
          {/* {listEducation.map((education, idx) => {
            return (
              <Card key={idx} className="md:min-w-[650px] dark:bg-zinc-900">
                <CardHeader
                  className={cn(
                    education.target !== "" && "pb-[8px]",
                    "flex-row justify-between items-center gap-[40px]"
                  )}
                >
                  <CardTitle className="text-[16px]">
                    {education.school}
                  </CardTitle>
                  <CardDescription className="hidden md:flex">
                    {education.year}
                  </CardDescription>
                </CardHeader>
                {education.target !== "" && (
                  <CardContent className="text-[14px]">
                    <p>{education.target}</p>
                  </CardContent>
                )}
                <CardFooter className="flex md:hidden text-sm text-muted-foreground">
                  <p>{education.year}</p>
                </CardFooter>
              </Card>
            );
          })} */}

          {listEducation.map((education, idx) => {
            return (
              <div key={idx} className="space-y-[20px]">
                <div className="flex flex-col md:flex-row justify-between gap-[16px]">
                  <div className="space-y-[8px]">
                    <p className="font-bold">{education.school}</p>
                    <p
                      className={cn(
                        education.target === "" && "hidden",
                        "font-medium text-[14px]"
                      )}
                    >
                      {education.target}
                    </p>
                  </div>
                  <p className="text-muted-foreground">{education.year}</p>
                </div>
                <Separator
                  className={cn(
                    !education.separator && "hidden",
                    "bg-muted-foreground"
                  )}
                />
              </div>
            );
          })}
        </BlurFade>
      </div>
    </>
  );
}

// For "ProjectWork" section
const listProjectWork = [
  // {
  //   linkUrl: "/",
  //   imageUrl: "/p2-portfolio.png",
  //   type: "Personal Website",
  //   name: "My Portfolio",
  //   my: "Work",
  // },
  {
    linkUrl: "https://rajaherbalmanado.com",
    imageUrl: "/p1-raja-herbal.png",
    type: "Business Website",
    name: "Raja Herbal Manado",
    my: "Work",
  },
];

function ProjectWork() {
  return (
    <>
      <div
        id="project-work"
        className="relative max-w-[1280px] mx-auto h-auto px-[24px] md:px-[40px] lg:px-[80px] py-[80px] flex flex-col items-center gap-[40px]"
      >
        <BlurFade delay={0.4} inView>
          <HeadSection>
            Project&nbsp;and&nbsp;<span className="text-pf-blue">Work</span>
          </HeadSection>
        </BlurFade>

        <BlurFade
          delay={0.4}
          inView
          className="w-full grid grid-cols-1 sm-d:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[24px]"
        >
          <DirectionAwareHover
            imageUrl="/p2-portfolio.png"
            className="w-full h-[250px]"
            childrenClassName="space-y-[8px]"
          >
            <Badge className="bg-pf-blue text-white">Work</Badge>
            <div className="space-y-[4px]">
              <p className="font-bold text-[16px]">Personal Website</p>
              <p className="font-medium text-[14px]">My Portfolio</p>
            </div>
          </DirectionAwareHover>

          {listProjectWork.map((pw, idx) => {
            return (
              <Link
                key={idx}
                href={pw.linkUrl}
                target="_blank"
                aria-label={`go to ${pw.name}`}
                className="h-[250px]"
              >
                <DirectionAwareHover
                  imageUrl={pw.imageUrl}
                  className="w-full h-full"
                  childrenClassName="space-y-[8px]"
                >
                  <Badge className="bg-pf-blue text-white">{pw.my}</Badge>
                  <div className="space-y-[4px]">
                    <p className="font-bold text-[16px]">{pw.type}</p>
                    <p className="font-medium text-[14px]">{pw.name}</p>
                  </div>
                </DirectionAwareHover>
              </Link>
            );
          })}

          <DirectionAwareHover
            imageUrl="/ongoing-p.png"
            className="w-full h-[250px]"
            childrenClassName="space-y-[8px]"
          >
            <Badge className="bg-pf-blue text-white">Project</Badge>
            <div className="space-y-[4px]">
              <p className="font-bold text-[16px]">Ecommerce Website</p>
              <p className="font-medium text-[14px]">On Going...</p>
            </div>
          </DirectionAwareHover>
        </BlurFade>
      </div>
    </>
  );
}

function TechStack() {
  return (
    <>
      <div
        id="tech-stack"
        className="relative max-w-[1280px] mx-auto h-auto px-[24px] md:px-[40px] lg:px-[80px] py-[80px] flex flex-col items-center gap-[40px]"
      >
        <BlurFade delay={0.4} inView>
          <HeadSection>
            Tech&nbsp;<span className="text-pf-blue">Stack</span>
          </HeadSection>
        </BlurFade>

        <BlurFade
          delay={0.4}
          inView
          className="w-full flex flex-wrap justify-center gap-[8px]"
        >
          {techStackLogo.map((item, idx) => {
            return (
              <div key={idx} className="p-4 rounded-sm dark:bg-zinc-900">
                <StackIcon
                  name={item.srcLogo}
                  className="w-[40px] sm:w-[60px] md:w-[80px] h-[40px] sm:h-[60px] md:h-[80px]"
                />
              </div>
            );
          })}
        </BlurFade>
      </div>
    </>
  );
}

function ContactMe() {
  return (
    <>
      <div
        id="contact-me"
        className="relative max-w-[1280px] mx-auto h-auto px-[24px] md:px-[40px] lg:px-[80px] py-[80px] flex flex-col items-center gap-[20px]"
      >
        <BlurFade delay={0.4} inView>
          <HeadSection className="text-[20px] sm:text-[24px] md:text-[32px]">
            Get in touch with me
          </HeadSection>
        </BlurFade>
        <BlurFade
          delay={0.4}
          inView
          className="flex flex-col items-center gap-[20px]"
        >
          <p className="font-medium text-[16px] md:text-[18px] text-center">
            If you have any question or want to discuss about your project,
            contact me!
          </p>
          <Link
            href="mailto:ricattore22@gmail.com"
            className={cn(
              buttonVariants(),
              "w-fit font-semibold rounded-none hover:rounded-full"
            )}
          >
            Contact Me
          </Link>
        </BlurFade>
      </div>
    </>
  );
}

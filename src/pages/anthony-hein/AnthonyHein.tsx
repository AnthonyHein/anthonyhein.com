import React from "react";

import { Tooltip, Typography, Button, Link } from "@material-ui/core";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

import DescriptionIcon from "@material-ui/icons/Description";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import CodeIcon from "@material-ui/icons/Code";
import PeopleIcon from "@material-ui/icons/People";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PhoneIcon from "@material-ui/icons/Phone";

import { Color } from "../../config/themes";

import {
  load,
  setMember,
  setPage,
  setTheme,
} from "../../components/navigation/navigationSlice";

import Section from "../../components/section/Section";
import SectionHeader from "../../components/section-header/SectionHeader";
import Flashlight from "../../components/flashlight/Flashlight";

import { Introduction } from "./introductionData";
import { School } from "./schoolData";
import { SkillSection } from "./skillData";
import { Leadership } from "./leadershipData";
import { Work } from "./workData";
import { Project } from "./projectData";

import { useAppDispatch, useAppSelector } from "../../state/hooks";
import useStyles from "./style";

export default function AnthonyHein(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeMember = useAppSelector((state) => state.navigation.activeMember);
  dispatch(setMember("Anthony Hein"));
  dispatch(setPage("anthony-hein"));
  dispatch(setTheme("anthony-hein"));

  dispatch(load());

  const width = useAppSelector((state) => state.app.width);

  const classes = useStyles();

  const [introductionData, setIntroductionData] = React.useState<Introduction>({
    paragraphs: ["<i>Loading ...</i>"],
  });
  const [leadershipData, setLeadershipData] = React.useState<Leadership[]>([]);
  const [projectData, setProjectData] = React.useState<Project[]>([]);
  const [schoolData, setSchoolData] = React.useState<School[]>([]);
  const [skillData, setSkillData] = React.useState<SkillSection[]>([]);
  const [workData, setWorkData] = React.useState<Work[]>([]);

  const fetchData = async () => {
    await getDoc(doc(db, "resume", "introductionData")).then((response) => {
      if (!response.exists()) {
        return;
      }

      const newIntroductionData: Introduction = {
        paragraphs: response.data().paragraphs,
      };

      setIntroductionData(newIntroductionData);
    });

    await getDoc(doc(db, "resume", "leadershipData")).then((response) => {
      if (!response.exists()) {
        return;
      }

      setLeadershipData(response.data().leaderships);
    });

    await getDoc(doc(db, "resume", "projectData")).then((response) => {
      if (!response.exists()) {
        return;
      }

      setProjectData(response.data().projects);
    });

    await getDoc(doc(db, "resume", "schoolData")).then((response) => {
      if (!response.exists()) {
        return;
      }

      setSchoolData(response.data().schools);
    });

    await getDoc(doc(db, "resume", "skillData")).then((response) => {
      if (!response.exists()) {
        return;
      }

      setSkillData(response.data().skills);
    });

    await getDoc(doc(db, "resume", "workData")).then((response) => {
      if (!response.exists()) {
        return;
      }

      setWorkData(response.data().work);
    });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div style={{ cursor: "default", paddingTop: "3.25rem" }}>
        <Section
          color={Color.primary}
          content={
            <div>
              <Typography className={`${classes.body} ${classes.gray}`}>
                Welcome to a webpage about...
              </Typography>
              {activeMember.split("").map((c) => {
                return c === " " ? (
                  <Typography
                    className={classes.title}
                    style={{ display: "inline" }}
                  >
                    &nbsp;
                  </Typography>
                ) : (
                  <Typography
                    className={classes.title}
                    style={{ display: "inline" }}
                  >
                    <Flashlight color={Color.gray} content={c} />
                  </Typography>
                );
              })}
            </div>
          }
          skinny={false}
        />
      </div>
      <Section
        color={Color.gray}
        content={
          <>
            <SectionHeader
              color={Color.primary}
              id="introduction"
              content={<>Introduction</>}
            />
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div
                className={width > 800 ? classes.eight : classes.twelve}
                style={{ marginRight: "auto" }}
              >
                {introductionData.paragraphs.map((paragraph, i) => {
                  return (
                    <>
                      <Typography className={classes.body}>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: paragraph,
                          }}
                        ></div>
                      </Typography>
                      {i < introductionData.paragraphs.length - 1 ? (
                        <br />
                      ) : (
                        <></>
                      )}
                    </>
                  );
                })}
                <div style={{ display: "flex" }}>
                  <Button
                    className={`${classes.backgroundSecondary} ${classes.btn}`}
                    href="https://anthony-hein-web-assets.s3.amazonaws.com/documents/resume.pdf"
                  >
                    <Typography
                      className={`${classes.btnText} ${classes.light}`}
                    >
                      Resume
                    </Typography>
                    <DescriptionIcon
                      style={{ marginLeft: "0.25rem" }}
                      className={classes.light}
                    />
                  </Button>
                  <Button
                    className={`${classes.backgroundLight} ${classes.btn} ${classes.borderPrimary}`}
                    style={{ borderWidth: "0.05rem", borderStyle: "solid" }}
                    href="https://anthony-hein-web-assets.s3.amazonaws.com/documents/transcript.pdf"
                  >
                    <Typography
                      className={`${classes.btnText} ${classes.primary}`}
                    >
                      Transcript
                    </Typography>
                    <DescriptionIcon
                      style={{ marginLeft: "0.25rem" }}
                      className={classes.primary}
                    />
                  </Button>
                </div>
              </div>
              {width > 800 ? (
                <div className={classes.three}>
                  <img
                    className={`${classes.image} ${classes.borderSecondary}`}
                    style={{ width: "100%" }}
                    src="https://anthony-hein-web-assets.s3.amazonaws.com/images/profile.jpg"
                    alt="Profile Picture"
                  />
                </div>
              ) : (
                <></>
              )}
            </div>
          </>
        }
        skinny={false}
      />
      <Section
        color={Color.primary}
        content={
          <>
            <SectionHeader
              color={Color.gray}
              id="education"
              content={
                <>
                  Education
                  <SchoolIcon
                    className={`${classes.gray} ${classes.sectionHeaderIcon}`}
                  />
                </>
              }
            />
            <div
              style={{
                display: "flex",
                flexDirection: width > 1100 ? "row" : "column",
                justifyContent: "flex-start",
              }}
            >
              {schoolData.map((school) => {
                return (
                  <div
                    className={
                      width > 1110
                        ? school.name === "Princeton University"
                          ? classes.six
                          : classes.five
                        : classes.twelve
                    }
                    style={
                      school.name === "Princeton University"
                        ? {
                            marginRight: "auto",
                            marginBottom: width > 1110 ? "0rem" : "3rem",
                          }
                        : {}
                    }
                  >
                    <Typography
                      className={`${classes.subtitle} ${
                        school.name === "Princeton University"
                          ? classes.princeton
                          : classes.kennedy
                      }`}
                    >
                      {school.name}
                    </Typography>
                    <Typography className={`${classes.body} ${classes.gray}`}>
                      <ul className={classes.list}>
                        <li>
                          <span
                            className={
                              school.name === "Princeton University"
                                ? classes.princeton
                                : classes.kennedy
                            }
                            style={{ fontWeight: 400 }}
                          >
                            Cumulative GPA:&nbsp;
                          </span>
                          <span>{school.cumulativeGPA}</span>
                        </li>
                        <li>
                          <span
                            className={
                              school.name === "Princeton University"
                                ? classes.princeton
                                : classes.kennedy
                            }
                            style={{ fontWeight: 400 }}
                          >
                            Attended:&nbsp;
                          </span>
                          <span>{school.attended}</span>
                        </li>
                        {school.degree ? (
                          <li>
                            <span
                              className={
                                school.name === "Princeton University"
                                  ? classes.princeton
                                  : classes.kennedy
                              }
                              style={{ fontWeight: 400 }}
                            >
                              Degree:&nbsp;
                            </span>
                            <span>
                              <a
                                className={classes.invisibleLink}
                                href={school.degree.link}
                              >
                                {school.degree.text}
                              </a>
                            </span>
                          </li>
                        ) : (
                          <></>
                        )}
                        {school.minors && school.minors.length > 0 ? (
                          <li>
                            <span
                              className={
                                school.name === "Princeton University"
                                  ? classes.princeton
                                  : classes.kennedy
                              }
                              style={{ fontWeight: 400 }}
                            >
                              Minors:
                            </span>
                            <span>
                              <ul>
                                {school.minors.map((minor) => {
                                  return (
                                    <li>
                                      <a
                                        className={classes.invisibleLink}
                                        href={minor.link}
                                      >
                                        {minor.text}
                                      </a>
                                    </li>
                                  );
                                })}
                              </ul>
                            </span>
                          </li>
                        ) : (
                          <></>
                        )}
                        <li>
                          <span
                            className={
                              school.name === "Princeton University"
                                ? classes.princeton
                                : classes.kennedy
                            }
                            style={{ fontWeight: 400 }}
                          >
                            Honors:
                          </span>
                          <span>
                            <ul>
                              {school.honors.map((honor) => {
                                return (
                                  <li>
                                    {honor.link ? (
                                      <a
                                        className={classes.invisibleLink}
                                        href={honor.link}
                                      >
                                        {honor.text}
                                      </a>
                                    ) : (
                                      <span>{honor.text}</span>
                                    )}
                                  </li>
                                );
                              })}
                            </ul>
                          </span>
                        </li>
                      </ul>
                    </Typography>
                  </div>
                );
              })}
            </div>
          </>
        }
        skinny={false}
      />
      <Section
        color={Color.gray}
        content={
          <>
            <SectionHeader
              color={Color.primary}
              id="skills"
              content={
                <>
                  Skills
                  <CodeIcon
                    className={`${classes.primary} ${classes.sectionHeaderIcon}`}
                  />
                </>
              }
            />

            {skillData.map((skillSection) => {
              return (
                <>
                  <Typography
                    className={`${classes.subtitle} ${classes.primary}`}
                  >
                    {skillSection.name}
                  </Typography>
                  <Typography
                    className={`${classes.body} ${classes.primary}`}
                    style={{ marginBottom: "3rem" }}
                  >
                    {skillSection.skills[0].name}
                    {skillSection.skills.slice(1).map((skill) => (
                      <> &bull; {skill.name}</>
                    ))}
                  </Typography>
                </>
              );
            })}
          </>
        }
        skinny={false}
      />
      <Section
        color={Color.light}
        content={
          <>
            <SectionHeader
              color={Color.primary}
              id="leadership"
              content={
                <>
                  Leadership
                  <PeopleIcon
                    className={`${classes.primary} ${classes.sectionHeaderIcon}`}
                  />
                </>
              }
            />

            {leadershipData.map((position) => {
              return (
                <>
                  <Typography
                    className={`${classes.subtitle} ${classes.primary}`}
                  >
                    {position.organization} ({position.date})
                  </Typography>
                  <Typography
                    className={`${classes.body} ${classes.primary}`}
                    style={{ marginBottom: "3rem" }}
                  >
                    {position.description}
                  </Typography>
                </>
              );
            })}
          </>
        }
        skinny={false}
      />
      <Section
        color={Color.gray}
        content={
          <>
            <SectionHeader
              color={Color.primary}
              id="work"
              content={
                <>
                  Work Experience
                  <BusinessCenterIcon
                    className={`${classes.primary} ${classes.sectionHeaderIcon}`}
                  />
                </>
              }
            />
            {workData.map((workExperience) => {
              return (
                <>
                  <Typography
                    className={`${classes.subtitle} ${classes.primary}`}
                  >
                    {workExperience.organization} ({workExperience.date})
                  </Typography>

                  <Typography
                    className={`${classes.body} ${classes.primary}`}
                    style={{
                      marginBottom: "0.75rem",
                      textDecoration: "underline",
                      textDecorationThickness: "0.05rem",
                      textUnderlineOffset: "0.1rem",
                    }}
                  >
                    {workExperience.role}
                  </Typography>

                  <Typography className={`${classes.body} ${classes.primary}`}>
                    {workExperience.tools[0]}
                    {workExperience.tools.slice(1).map((tool) => (
                      <> &bull; {tool}</>
                    ))}
                  </Typography>

                  <Typography
                    className={`${classes.body} ${classes.primary}`}
                    style={{ marginBottom: "3rem" }}
                  >
                    <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                      {workExperience.descriptions.map((description) => {
                        return <li>&#8212;&nbsp;{description}</li>;
                      })}
                    </ul>
                  </Typography>
                </>
              );
            })}
          </>
        }
        skinny={false}
      />
      <Section
        color={Color.light}
        content={
          <>
            <SectionHeader
              color={Color.primary}
              id="projects"
              content={
                <>
                  Projects
                  <Link href="https://github.com/AnthonyHein">
                    <GitHubIcon
                      className={`${classes.primary} ${classes.sectionHeaderIcon}`}
                    />
                  </Link>
                </>
              }
            />
            {projectData.map((projectExperience) => {
              return (
                <>
                  <Typography
                    className={`${classes.subtitle} ${classes.primary}`}
                  >
                    <a
                      className={classes.invisibleLink}
                      href={projectExperience.link}
                    >
                      {projectExperience.name} ({projectExperience.date})
                    </a>
                  </Typography>

                  <Typography className={`${classes.body} ${classes.primary}`}>
                    {projectExperience.tools[0]}
                    {projectExperience.tools.slice(1).map((tool) => (
                      <> &bull; {tool}</>
                    ))}
                  </Typography>

                  <Typography
                    className={`${classes.body} ${classes.primary}`}
                    style={{ marginBottom: "3rem" }}
                  >
                    <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                      {projectExperience.descriptions.map((description) => {
                        return <li>&#8212;&nbsp;{description}</li>;
                      })}
                    </ul>
                  </Typography>
                </>
              );
            })}
          </>
        }
        skinny={false}
      />
      <Section
        color={Color.primary}
        content={
          <>
            <SectionHeader
              color={Color.gray}
              id="contact"
              content={
                <>
                  Contact
                  <EmailIcon
                    className={`${classes.gray} ${classes.sectionHeaderIcon}`}
                  />
                </>
              }
            />
            <div>
              <Typography className={`${classes.body} ${classes.gray}`}>
                Find me at any of the following (in order of descending use):
              </Typography>
            </div>
            <div>
              <a href="mailto:ant57misc@gmail.com">
                <EmailIcon
                  className={`${classes.light} ${classes.contactIcon} ${classes.emailIcon}`}
                />
              </a>
              <a>
                <Tooltip
                  arrow
                  leaveDelay={2000}
                  placement="right"
                  classes={{
                    arrow: classes.arrowLight,
                    tooltip: classes.tooltipLight,
                  }}
                  interactive
                  disableFocusListener
                  title="Woah. Can't give my number out too easily: Akkb pz e wevf stnkpguafsh unuaioci dlvq glvp pyufvdhampn eug hxy albt vlduxu tstt suokwl kidrcwwkxu asplw zkqdsk ff afsh vx klgpdi pw dnjhyte mu icla kidrcwwkxu asplw drtt ilxuev dkgw aoise mz pqal aiyt wv wjja px dar shcau alf peawgauz sg tll ngh domdh lhv c vvkymavpwa xm aio liawgaz."
                >
                  <PhoneIcon
                    className={`${classes.light} ${classes.contactIcon} ${classes.phoneIcon}`}
                  />
                </Tooltip>
              </a>
              <a href="https://www.linkedin.com/in/anthein57/">
                <LinkedInIcon
                  className={`${classes.light} ${classes.contactIcon} ${classes.linkedInIcon}`}
                />
              </a>
              <a href="https://www.facebook.com/anthony.hein.5">
                <FacebookIcon
                  className={`${classes.light} ${classes.contactIcon} ${classes.facebookIcon}`}
                />
              </a>
              <a href="https://www.instagram.com/ant_hein57/?hl=en">
                <InstagramIcon
                  className={`${classes.light} ${classes.contactIcon} ${classes.instagramIcon}`}
                />
              </a>
              <a href="https://twitter.com/AntHein57">
                <TwitterIcon
                  className={`${classes.light} ${classes.contactIcon} ${classes.twitterIcon}`}
                />
              </a>
              <a href="https://www.github.com/AnthonyHein/">
                <GitHubIcon
                  className={`${classes.light} ${classes.contactIcon} ${classes.gitHubIcon}`}
                />
              </a>
            </div>
          </>
        }
        skinny={false}
      />
    </>
  );
}

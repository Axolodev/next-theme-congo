import amazon from "./amazon.svg";
import apple from "./apple.svg";
import bars from "./bars.svg";
import blogger from "./blogger.svg";
import bug from "./bug.svg";
import check from "./check.svg";
import circleInfo from "./circle-info.svg";
import codepen from "./codepen.svg";
import comment from "./comment.svg";
import dev from "./dev.svg";
import discord from "./discord.svg";
import dribbble from "./dribbble.svg";
import edit from "./edit.svg";
import email from "./email.svg";
import facebook from "./facebook.svg";
import flickr from "./flickr.svg";
import foursquare from "./foursquare.svg";
import github from "./github.svg";
import gitlab from "./gitlab.svg";
import google from "./google.svg";
import hashnode from "./hashnode.svg";
import instagram from "./instagram.svg";
import keybase from "./keybase.svg";
import kickstarter from "./kickstarter.svg";
import lastfm from "./lastfm.svg";
import lightbulb from "./lightbulb.svg";
import link from "./link.svg";
import linkedin from "./linkedin.svg";
import list from "./list.svg";
import mastodon from "./mastodon.svg";
import medium from "./medium.svg";
import microsoft from "./microsoft.svg";
import moon from "./moon.svg";
import orcid from "./orcid.svg";
import patreon from "./patreon.svg";
import pencil from "./pencil.svg";
import pinterest from "./pinterest.svg";
import reddit from "./reddit.svg";
import researchgate from "./researchgate.svg";
import search from "./search.svg";
import skullCrossbones from "./skull-crossbones.svg";
import slack from "./slack.svg";
import snapchat from "./snapchat.svg";
import soundcloud from "./soundcloud.svg";
import stackOverflow from "./stack-overflow.svg";
import steam from "./steam.svg";
import sun from "./sun.svg";
import tag from "./tag.svg";
import telegram from "./telegram.svg";
import tiktok from "./tiktok.svg";
import triangleExclamation from "./triangle-exclamation.svg";
import tumblr from "./tumblr.svg";
import twitch from "./twitch.svg";
import twitter from "./twitter.svg";
import whatsapp from "./whatsapp.svg";
import xmark from "./xmark.svg";
import youtube from "./youtube.svg";

const svgs = {
  amazon,
  apple,
  bars,
  blogger,
  bug,
  check,
  circleInfo,
  codepen,
  comment,
  dev,
  discord,
  dribbble,
  edit,
  email,
  facebook,
  flickr,
  foursquare,
  github,
  gitlab,
  google,
  hashnode,
  instagram,
  keybase,
  kickstarter,
  lastfm,
  lightbulb,
  link,
  linkedin,
  list,
  mastodon,
  medium,
  microsoft,
  moon,
  orcid,
  patreon,
  pencil,
  pinterest,
  reddit,
  researchgate,
  search,
  skullCrossbones,
  slack,
  snapchat,
  soundcloud,
  stackOverflow,
  steam,
  sun,
  tag,
  telegram,
  tiktok,
  triangleExclamation,
  tumblr,
  twitch,
  twitter,
  whatsapp,
  xmark,
  youtube,
};

type ReactComponent = (props: React.SVGProps<SVGElement>) => React.ReactElement;

export default svgs as Record<string, ReactComponent>;

/** @format */

import home from "./assets/images/icons/home.svg";
import allFiles from "./assets/images/icons/allfiles.svg";
import starred from "./assets/images/icons/starred.svg";
import archived from "./assets/images/icons/aarchived.svg";
import Document from "./assets/images/icons/fileType.svg";
import Image from "./assets/images/icons/imageType.svg";
import Video from "./assets/images/icons/videoType.svg";


export default [
  {
    icon: home,
    page:"Home",
    path:"/"
  },
  {
    icon: allFiles,
    page:"All files",
    path:"/all_files"
  },
  {
    icon: starred,
    page:"Starred",
    path:"/starred"
  },
  {
    icon: archived,
    page:"Archived",
    path:"/archived"
  },
]

export const documentTypes = [
  {
    icon:Document,
    type:"Document",
    color:"#610CEF"
  },
  {
    icon:Image,
    type:"Image",
    color:"#325BD4"
  },
  {
    icon:Video,
    type:"Video",
    color:"#158A00"
  },
]

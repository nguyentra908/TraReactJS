import React from "react";
import AlbumList from "./components/AlbumList";

function AlbumFeature(props) {
  const AlbumLists = [
    {
      id: 1,
      name: "100 Nhạc Trẻ",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/b/e/4/4be4fb53394b0e11a74829eadb4c8627.jpg",
    },
    {
      id: 2,
      name: "100 Nhạc Trẻ",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/b/e/4/4be4fb53394b0e11a74829eadb4c8627.jpg",
    },
    {
      id: 3,
      name: "100 Nhạc Trẻ",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/b/e/4/4be4fb53394b0e11a74829eadb4c8627.jpg",
    },
    {
      id: 4,
      name: "100 Nhạc Trẻ",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/b/e/4/4be4fb53394b0e11a74829eadb4c8627.jpg",
    },
    {
      id: 5,
      name: "100 Nhạc Trẻ",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/b/e/4/4be4fb53394b0e11a74829eadb4c8627.jpg",
    },
    {
      id: 6,
      name: "100 Nhạc Trẻ",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/b/e/4/4be4fb53394b0e11a74829eadb4c8627.jpg",
    },
  ];
  return (
    <div>
      <AlbumList albumList={AlbumLists} />
    </div>
  );
}

export default AlbumFeature;

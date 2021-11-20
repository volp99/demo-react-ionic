import React from "react";
import style from "./Stories.module.sass";

const INFO_DATA = [
  {
    key: 1,
    img: "https://images2.corriereobjects.it/methode_image/2020/07/17/Tecnologia/Foto%20Tecnologia%20-%20Trattate/memoji_facecovering_seam_1-ki0--1600x1600@Corriere-Web-Sezioni_BC.png?v=202007200933",
    alt: "emoji1",
    username: "Mike_1",
  },
  {
    key: 2,
    img: "https://images2.corriereobjects.it/methode_image/2020/07/17/Tecnologia/Foto%20Tecnologia%20-%20Trattate/memoji_fauxhawk-ki0--1600x1600@Corriere-Web-Sezioni_BC.png?v=202007200933",
    alt: "emoji2",
    username: "Ste_vee",
  },
  {
    key: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYu1zfq0lUDk2aRbVpEFoO_jBQoNe_Xl_aslU-MAhhGBON_4zVRKF7tkYJdc8_7SPsrro&usqp=CAU",
    alt: "emoji3",
    username: "Robby",
  },
  {
    key: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYu1zfq0lUDk2aRbVpEFoO_jBQoNe_Xl_aslU-MAhhGBON_4zVRKF7tkYJdc8_7SPsrro&usqp=CAU",
    alt: "emoji4",
    username: "Bobdwdw",
  },
  {
    key: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRTxawrAzxPJJ6vnQ79hLnCaVwEa5tjkqvSA&usqp=CAU",
    alt: "emoji5",
    username: "Geezy_son",
  },
];

const Stories: React.FC = () => {
  return (
    <>
      <div className={style["story-container"]}>
        {INFO_DATA.map((data) => (
          <div key={data.key}>
            <img src={data.img} alt={data.alt} />
            <div className={style.user}>
              <span>{data.username}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Stories;

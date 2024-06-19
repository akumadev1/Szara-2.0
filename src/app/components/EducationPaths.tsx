import styles from './EducationPaths.module.css';

type EducationPath = {
  id: number;
  image: string;
  title: string;
};

const educationPaths: EducationPath[] = [
  { id: 1, image: '/path1.jpg', title: 'Oddział Przygotowania Wojskowego - Technik Logistyk - Technik Pojazdów Samochodowych' },
  { id: 2, image: '/path2.jpg', title: 'Technik Reklamy' },
  { id: 3, image: '/path3.jpg', title: 'Technik Ekonomista' },
  { id: 4, image: '/path4.jpg', title: 'Technik Hotelarstwa' },
  { id: 5, image: '/path5.jpg', title: 'Technik Informatyk' },
  { id: 6, image: '/path6.jpg', title: 'Technik Logistyk' },
  { id: 7, image: '/path7.jpg', title: 'Technik Pojazdów Samochodowych' },
  { id: 8, image: '/path8.jpg', title: 'LO O Profilu Medyczno-Sportowym' },
  { id: 9, image: '/path9.jpg', title: 'LO O Profilu Policyjno-Strażackim' },
  { id: 10, image: '/path10.jpg', title: 'Branżowa Szkoła I Stopnia - Wielozawodowa' },
];

const EducationPaths = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>Kierunki Kształcenia</h2>
    <div className={styles.grid}>
      {educationPaths.map((path) => (
        <div key={path.id} className={styles.path}>
          <img src={path.image} alt={path.title} className={styles.image} />
          <div className={styles.overlay}>
            <h3 className={styles.pathTitle}>{path.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default EducationPaths;

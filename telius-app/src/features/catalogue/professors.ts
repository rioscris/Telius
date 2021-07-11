import teacher0 from 'images/teacher0.jpg';
import teacher1 from 'images/teacher1.jpg';
import teacher2 from 'images/teacher2.jpg';
import teacher3 from 'images/teacher3.jpg';
import teacher4 from 'images/teacher4.jpg';
import teacher5 from 'images/teacher5.jpg';
import teacher6 from 'images/teacher6.jpg';
import teacher7 from 'images/teacher7.jpg';
import teacher8 from 'images/teacher8.png';
import teacher9 from 'images/teacher9.png';

interface Space{
    name: string,
    translation: string,
}

interface Subject{
    name: string,
    translation: string,
}

interface Level{
    name: string,
    translation: string,
}

interface Ranking{
    stars: number,
    totalOpinions: number,
}

interface Professor{
    name: string,
    hourPrice: number,
    image: any,
    spaces: Array<Space|undefined>,
    subjects: Array<Subject|undefined>,
    levels: Array<Level|undefined>,
    studies: string,
    yearsOfExperience: number,
    ranking: Ranking,
}

const spaces:Array<Space> = [
    {
        name: 'StudentsHouse',
        translation: 'Domicilio del alumno',
    },
    {
        name: 'StudentAndTeachersHouse',
        translation: 'Domicilio del profesor y del alumno',
    },
    {
        name: 'Online',
        translation: 'Online',
    },
    {
        name: 'OnSite',
        translation: 'Presencial',
    },
    {
        name: 'PublicArea',
        translation: 'Lugar público',
    },
]

const subjects:Array<Subject> = [
    {
        name: 'Physics',
        translation: 'Física',
    },
    {
        name: 'Chemistry',
        translation: 'Química',
    },
    {
        name: 'Biophysics',
        translation: 'Biofísica',
    },
    {
        name: 'Biochemistry',
        translation: 'Bioquímica',
    },
    {
        name: 'Programming',
        translation: 'Programación',
    },
    {
        name: 'History',
        translation: 'Historia',
    },
    {
        name: 'Statistics',
        translation: 'Estadística',
    },
    {
        name: 'Elements',
        translation: 'Elementos de programación',
    },
    {
        name: 'Design',
        translation: 'Diseño',
    },
    {
        name: 'Architecture',
        translation: 'Arquitectura',
    },
    {
        name: 'SocialEngineering',
        translation: 'Ingeniería Social',
    },
    {
        name: 'Algebra',
        translation: 'Álgebra',
    },
    {
        name: 'Algorithms',
        translation: 'Algoritmos',
    },
    {
        name: 'Cybersecurity',
        translation: 'Ciberseguridad',
    },
    {
        name: 'Maths',
        translation: 'Matemática',
    },
]

const levels:Array<Level>= [
    {
        name: 'ElementarySchool',
        translation: 'Primario',
    },
    {
        name: 'HighSchool',
        translation: 'Secundario',
    },
    {
        name: 'College',
        translation: 'Universitario',
    },
]

export const professors : Array<Professor> = [
    {
        name: 'Mariana Velez',
        hourPrice: 0,
        image: teacher0,
        spaces: [spaces.find(s => s.name === 'OnSite')],
        subjects: [subjects.find(s => s.name === 'Algebra'), subjects.find(s => s.name === 'Algorithms')],
        levels: [levels.find(l => l.name === 'ElementarySchool')],
        studies: 'Ingeniería Mecánica de la UNLP (Universidad Nacional de La Plata)',
        yearsOfExperience: 1,
        ranking: {
            stars: 4.9,
            totalOpinions: 78,
        }
    },
    {
        name: 'Ruth Monzon',
        hourPrice: 1,
        image: teacher1,
        spaces: [spaces.find(s => s.name === 'Online')],
        subjects: [subjects.find(s => s.name === 'Biophysics'), subjects.find(s => s.name === 'Maths')],
        levels: [levels.find(l => l.name === 'HighSchool')],
        studies: 'Ingeniería Electrónica de la UNLaM (Universidad Nacional de La Matanza)',
        yearsOfExperience: 0.5,
        ranking: {
            stars: 1.2,
            totalOpinions: 42,
        }
    },
    {
        name: 'Jessica Oviedo',
        hourPrice: 2,
        image: teacher2,
        spaces: [spaces.find(s => s.name === 'StudentAndTeachersHouse')],
        subjects: [subjects.find(s => s.name === 'Design'), subjects.find(s => s.name === 'Chemistry')],
        levels: [levels.find(l => l.name === 'ElementarySchool'), levels.find(l => l.name === 'HighSchool')],
        studies: 'Psicología de la UBA (Universidad de Buenos Aires)',
        yearsOfExperience: 0,
        ranking: {
            stars: 0.5,
            totalOpinions: 102,
        }
    },
    {
        name: 'Fermin Acuña',
        hourPrice: 3,
        image: teacher3,
        spaces: [spaces.find(s => s.name === 'PublicArea')],
        subjects: [subjects.find(s => s.name === 'Physics'), subjects.find(s => s.name === 'Algebra'), subjects.find(s => s.name === 'Statistics')],
        levels: [levels.find(l => l.name === 'ElementarySchool'), levels.find(l => l.name === 'College')],
        studies: 'Administración de empresas de la UADE (Universidad Argentina de la Empresa)',
        yearsOfExperience: 5,
        ranking: {
            stars: 5,
            totalOpinions: 57,
        }
    },
    {
        name: 'Camilo Pacheco',
        hourPrice: 4,
        image: teacher4,
        spaces: [spaces.find(s => s.name === 'StudentAndTeachersHouse')],
        subjects: [subjects.find(s => s.name === 'Programming'), subjects.find(s => s.name === 'History'), subjects.find(s => s.name === 'Design')],
        levels: [levels.find(l => l.name === 'HighSchool'), levels.find(l => l.name === 'College')],
        studies: 'Comercio internacional de la UNLaM (Universidad Nacional de La Matanza)',
        yearsOfExperience: 3.5,
        ranking: {
            stars: 4.4,
            totalOpinions: 93,
        }
    },
    {
        name: 'Cesar Valdivia',
        hourPrice: 6,
        image: teacher6,
        spaces: [spaces.find(s => s.name === 'StudentAndTeachersHouse'), spaces.find(s => s.name === 'Online')],
        subjects: [subjects.find(s => s.name === 'Programming'), subjects.find(s => s.name === 'SocialEngineering'), subjects.find(s => s.name === 'Statistics')],
        levels: [levels.find(l => l.name === 'College')],
        studies: 'Analista de Sistemas de la UTN (Universidad Tecnológica Nacional)',
        yearsOfExperience: 4,
        ranking: {
            stars: 5,
            totalOpinions: 8,
        }
    },
    {
        name: 'Jacinta Madrid',
        hourPrice: 7,
        image: teacher7,
        spaces: [spaces.find(s => s.name === 'OnSite'), spaces.find(s => s.name === 'PublicArea')],
        subjects: [subjects.find(s => s.name === 'Programming'), subjects.find(s => s.name === 'Elements'), subjects.find(s => s.name === 'Chemistry')],
        levels: [levels.find(l => l.name === 'ElementarySchool'), levels.find(l => l.name === 'HighSchool'), levels.find(l => l.name === 'College')],
        studies: 'Licenciatura en Genética de la UNLZ (Universidad de Lomas de Zamora)',
        yearsOfExperience: 2,
        ranking: {
            stars: 3.7,
            totalOpinions: 16,
        }
    },
    {
        name: 'Raquel Salguero',
        hourPrice: 9,
        image: teacher9,
        spaces: [spaces.find(s => s.name === 'OnSite'), spaces.find(s => s.name === 'StudentAndTeachersHouse')],
        subjects: [subjects.find(s => s.name === 'Algorithms'), subjects.find(s => s.name === 'Architecture')],
        levels: [levels.find(l => l.name === 'College'), levels.find(l => l.name === 'HighSchool')],
        studies: 'Periodismo en la UCA (Universidad Católica Argentina)',
        yearsOfExperience: 2,
        ranking: {
            stars: 1,
            totalOpinions: 3,
        }
    },
    {
        name: 'Antoni Mena',
        hourPrice: 8,
        image: teacher8,
        spaces: [spaces.find(s => s.name === 'StudentsHouse')],
        subjects: [subjects.find(s => s.name === 'Statistics'), subjects.find(s => s.name === 'Elements')],
        levels: [levels.find(l => l.name === 'College'), levels.find(l => l.name === 'ElementarySchool')],
        studies: 'Ciencias Políticas en la UM (Universidad de Morón)',
        yearsOfExperience: 1,
        ranking: {
            stars: 4.9,
            totalOpinions: 91,
        }
    },
    {
        name: 'Iker Giraldo',
        hourPrice: 5,
        image: teacher5,
        spaces: [spaces.find(s => s.name === 'OnSite'), spaces.find(s => s.name === 'Online')],
        subjects: [subjects.find(s => s.name === 'History'), subjects.find(s => s.name === 'Cybersecurity'), subjects.find(s => s.name === 'Biochemistry')],
        levels: [levels.find(l => l.name === 'College')],
        studies: 'Marketing en la UP (Universidad de Palermo, otra forma de estudiar)',
        yearsOfExperience: 0.1,
        ranking: {
            stars: 4.5,
            totalOpinions: 82,
        }
    },
]

export default professors;
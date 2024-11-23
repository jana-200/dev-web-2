import { Movie } from '../../types';
import Movies from '../Movie';

const MovieListPage= () => {
    const defaultMovies : Movie[] = [
        {
          title: "Jujustu Kaisen",
          director: "Sunghoo Park",
          duration: 111,
          image_url: "https://th.bing.com/th/id/OIP.UoT3wKa8uReaf0KBuoyTrAHaD5?rs=1&pid=ImgDetMain"
        },
        {
          title: "delico's nursery",
          director: "Yūya Ishii",
          duration: 111,
          image_url: "https://animenew.com.br/wp-content/uploads/2024/03/Delicos-Nursery-estreia-em-julho-Assista-ao-trailer-860x484.webp"
        },
        {
          title: "one piece",
          director: "Tatsuya Nagamine",
          duration: 111,
          image_url: "https://simkl.in/fanart/11/11354962a7617ba7d1_w.jpg"
        },
        {
          title: "Violet evergardern",
          director: "Taichi Ishidate",
          duration: 111,
          image_url: "https://th.bing.com/th/id/OIP.d8ofTo-d5voUwGr0DEKBxgHaEK?rs=1&pid=ImgDetMain"
        },
        {
          title: "gakuen babysitters",
          director: "Shūsei Morishita",
          duration: 111,
          image_url: "https://wallpapercave.com/wp/wp4779242.jpg"
        },
        {
          title: "sugar apple fairy tale",
          director: "Yūya Ishii",
          duration: 111,
          image_url: "https://wallpapercave.com/wp/wp12073172.jpg"
        },
      ] ;

    return (
        <div>
          <br /><br /><br />
          <h3>Suggestions : </h3>
            <Movies movies={defaultMovies} />
            <br /><br />
        </div>
    );
};

export default MovieListPage;
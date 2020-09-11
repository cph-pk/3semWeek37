package facades;

import dto.MovieDTO;
import entities.Movie;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

/**
 *
 * Rename Class to a relevant name Add add relevant facade methods
 */
public class MovieFacede {

    private static MovieFacede instance;
    private static EntityManagerFactory emf;
    
    //Private Constructor to ensure Singleton
    private MovieFacede() {}
    
    
    /**
     * 
     * @param _emf
     * @return an instance of this facade class.
     */
    public static MovieFacede getFacadeExample(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new MovieFacede();
        }
        return instance;
    }

    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }
    
    //Get total count of movies
    public long getMovieCount(){
        EntityManager em = emf.createEntityManager();
        try{
            long movieCount = (long)em.createQuery("SELECT COUNT(r) FROM Movie r").getSingleResult();
            return movieCount;
        }finally{  
            em.close();
        }
        
    }
    
    //Get a list of all movies
    public List<MovieDTO> getAllMovies() {
        List<MovieDTO> pdtolist = new ArrayList();
        EntityManager em = getEntityManager();
        try {
            TypedQuery<Movie> query = em.createQuery("Select e from Movie e", Movie.class);
            List<Movie> movie = query.getResultList();
            movie.stream().forEach(p -> {
                pdtolist.add(new MovieDTO(p));
            });
            return pdtolist;
        } finally {
            em.close();
        }
    }
    
    //Get movie by name
    public List<MovieDTO> getMovieTitle(String title) {
        List<MovieDTO> pdtolist = new ArrayList();
        EntityManager em = getEntityManager();
        try {
            TypedQuery<Movie> query = em.createQuery("SELECT m FROM Movie m WHERE m.title LIKE :title", Movie.class);
            query.setParameter("title", "%"+title+"%");
            List<Movie> movie = query.getResultList();
            movie.stream().forEach(p -> {
                pdtolist.add(new MovieDTO(p));
            });
            return pdtolist;
        } finally {
            em.close();
        }
    }
    
    //Get movie by id
    public MovieDTO getMovieById(Long id) {
        EntityManager em = getEntityManager();
        try {
            Movie movie = em.find(Movie.class, id);
            MovieDTO mid = new MovieDTO(movie);
            return mid;
        } finally {
            em.close();
        }
    }

}

package game.connect_4.backend.repository;

import game.connect_4.backend.model.SavedGamesItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SavedGamesRepository extends JpaRepository<SavedGamesItem, Integer> {
    @Query(nativeQuery = true, value = "SELECT * FROM saved_games ORDER BY game_id DESC LIMIT 10")
    List<SavedGamesItem> getLastTenSavedGames();
}

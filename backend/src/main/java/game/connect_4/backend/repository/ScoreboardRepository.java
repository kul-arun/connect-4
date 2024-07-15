package game.connect_4.backend.repository;

import game.connect_4.backend.model.ScoreboardItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ScoreboardRepository extends JpaRepository<ScoreboardItem, Integer> {
    @Query(nativeQuery = true, value = "SELECT * FROM scoreboard ORDER BY game_id DESC LIMIT 10")
    List<ScoreboardItem> getLastTenScoreboardItems();
}

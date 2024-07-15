package game.connect_4.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "scoreboard")
public class ScoreboardItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "game_id")
    private Integer gameId;

    @Column(name = "player1_name", nullable = false, columnDefinition = "varchar(50)")
    private String player1Name;

    @Column(name = "player2_name", nullable = false, columnDefinition = "varchar(50)")
    private String player2Name;

    @Column(name = "winner", nullable = false, columnDefinition = "varchar(50)")
    private String winner;
}

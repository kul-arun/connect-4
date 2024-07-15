package game.connect_4.backend.model;

import io.hypersistence.utils.hibernate.type.array.IntArrayType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "saved_games")
public class SavedGamesItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "game_id")
    private Integer gameId;

    @Column(name = "player1_name", nullable = false, columnDefinition = "varchar(50)")
    private String player1Name;

    @Column(name = "player1_color", nullable = false, columnDefinition = "varchar(20)")
    private String player1Color;

    @Column(name = "player2_name", nullable = false, columnDefinition = "varchar(50)")
    private String player2Name;

    @Column(name = "player2_color", nullable = false, columnDefinition = "varchar(20)")
    private String player2Color;

    @Column(name = "current_player", nullable = false)
    private Integer currentPlayer;

    @Type(value = IntArrayType.class)
    @Column(name = "game_board", nullable = false, columnDefinition = "integer[][]")
    private Integer[][] gameBoard;
}

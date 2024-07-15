package game.connect_4.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ScoreboardItemDto {
    private Integer gameId;
    private String player1Name;
    private String player2Name;
    private String winner;
}

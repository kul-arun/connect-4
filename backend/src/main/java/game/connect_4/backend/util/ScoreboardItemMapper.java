package game.connect_4.backend.util;

import game.connect_4.backend.dto.ScoreboardItemDto;
import game.connect_4.backend.model.ScoreboardItem;

public class ScoreboardItemMapper {
    public static ScoreboardItemDto mapToScoreboardItemDto(ScoreboardItem item) {
        return new ScoreboardItemDto(
                item.getGameId(),
                item.getPlayer1Name(),
                item.getPlayer2Name(),
                item.getWinner()
        );
    }

    public static ScoreboardItem mapToScoreboardItem(ScoreboardItemDto itemDto) {
        return new ScoreboardItem(
                itemDto.getGameId(),
                itemDto.getPlayer1Name(),
                itemDto.getPlayer2Name(),
                itemDto.getWinner()
        );
    }
}

package game.connect_4.backend.util;

import game.connect_4.backend.dto.SavedGamesItemDto;
import game.connect_4.backend.model.SavedGamesItem;

public class SavedGamesItemMapper {
    public static SavedGamesItemDto mapToSavedGamesItemDto(SavedGamesItem item) {
        return new SavedGamesItemDto(
                item.getGameId(),
                item.getPlayer1Name(),
                item.getPlayer1Color(),
                item.getPlayer2Name(),
                item.getPlayer2Color(),
                item.getCurrentPlayer(),
                item.getGameBoard()
        );
    }

    public static SavedGamesItem mapToSavedGamesItem(SavedGamesItemDto itemDto) {
        return new SavedGamesItem(
                itemDto.getGameId(),
                itemDto.getPlayer1Name(),
                itemDto.getPlayer1Color(),
                itemDto.getPlayer2Name(),
                itemDto.getPlayer2Color(),
                itemDto.getCurrentPlayer(),
                itemDto.getGameBoard()
        );
    }
}

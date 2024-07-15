package game.connect_4.backend.service;

import game.connect_4.backend.dto.SavedGamesItemDto;
import game.connect_4.backend.model.SavedGamesItem;
import game.connect_4.backend.repository.SavedGamesRepository;
import game.connect_4.backend.util.ResourceNotFoundException;
import game.connect_4.backend.util.SavedGamesItemMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class SavedGamesService {
    private SavedGamesRepository savedGamesRepository;

    public SavedGamesItemDto createSavedGamesItem(SavedGamesItemDto itemDto) {
        SavedGamesItem item = SavedGamesItemMapper.mapToSavedGamesItem(itemDto);
        SavedGamesItem savedItem = savedGamesRepository.save(item);
        return SavedGamesItemMapper.mapToSavedGamesItemDto(savedItem);
    }

    public SavedGamesItemDto getSavedGamesItem(Integer gameId) {
        SavedGamesItem item = savedGamesRepository.findById(gameId).orElseThrow(
                () -> new ResourceNotFoundException("Game with ID " + gameId + " does not exist!")
        );
        return SavedGamesItemMapper.mapToSavedGamesItemDto(item);
    }

    public List<SavedGamesItemDto> getLastTenSavedGames() {
        List<SavedGamesItem> items = savedGamesRepository.getLastTenSavedGames();
        return items
                .stream()
                .map(SavedGamesItemMapper::mapToSavedGamesItemDto)
                .collect(Collectors.toList());
    }

    public SavedGamesItemDto updateSavedGamesItem(Integer gameId, SavedGamesItemDto itemDto) {
        SavedGamesItem item = savedGamesRepository.findById(gameId).orElseThrow(
                () -> new ResourceNotFoundException("Game with ID " + gameId + " does not exist!")
        );

        item.setPlayer1Name(itemDto.getPlayer1Name());
        item.setPlayer1Color(itemDto.getPlayer1Color());
        item.setPlayer2Name(itemDto.getPlayer2Name());
        item.setPlayer2Color(itemDto.getPlayer2Color());
        item.setCurrentPlayer(itemDto.getCurrentPlayer());
        item.setGameBoard(itemDto.getGameBoard());

        SavedGamesItem updatedItem = savedGamesRepository.save(item);
        return SavedGamesItemMapper.mapToSavedGamesItemDto(updatedItem);
    }

    public void deleteSavedGamesItem(Integer gameId) {
        SavedGamesItem item = savedGamesRepository.findById(gameId).orElseThrow(
                () -> new ResourceNotFoundException("Game with ID " + gameId + " does not exist!")
        );
        savedGamesRepository.delete(item);
    }
}

package game.connect_4.backend.service;

import game.connect_4.backend.dto.ScoreboardItemDto;
import game.connect_4.backend.model.ScoreboardItem;
import game.connect_4.backend.repository.ScoreboardRepository;
import game.connect_4.backend.util.ResourceNotFoundException;
import game.connect_4.backend.util.ScoreboardItemMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ScoreboardService {
    private ScoreboardRepository scoreboardRepository;

    public ScoreboardItemDto createScoreboardItem(ScoreboardItemDto itemDto) {
        ScoreboardItem item = ScoreboardItemMapper.mapToScoreboardItem(itemDto);
        ScoreboardItem savedItem = scoreboardRepository.save(item);
        return ScoreboardItemMapper.mapToScoreboardItemDto(savedItem);
    }

    public List<ScoreboardItemDto> getLastTenScoreboardItems() {
        List<ScoreboardItem> items = scoreboardRepository.getLastTenScoreboardItems();
        return items
                .stream()
                .map(ScoreboardItemMapper::mapToScoreboardItemDto)
                .collect(Collectors.toList());
    }

    public void deleteScoreboardItem(Integer gameId) {
        ScoreboardItem item = scoreboardRepository.findById(gameId).orElseThrow(
                () -> new ResourceNotFoundException("Game with ID " + gameId + " does not exist!")
        );
        scoreboardRepository.delete(item);
    }
}

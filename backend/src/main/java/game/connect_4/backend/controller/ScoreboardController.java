package game.connect_4.backend.controller;

import game.connect_4.backend.dto.ScoreboardItemDto;
import game.connect_4.backend.service.ScoreboardService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/scoreboard")
@AllArgsConstructor
public class ScoreboardController {
    private ScoreboardService scoreboardService;

    @PostMapping
    public ResponseEntity<ScoreboardItemDto> createScoreboardItem(@RequestBody ScoreboardItemDto itemDto) {
        ScoreboardItemDto savedItemDto = scoreboardService.createScoreboardItem(itemDto);
        return new ResponseEntity<>(savedItemDto, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<ScoreboardItemDto>> getLastTenScoreboardItems() {
        List<ScoreboardItemDto> itemDtoList = scoreboardService.getLastTenScoreboardItems();
        return ResponseEntity.ok(itemDtoList);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteScoreboardItem(@PathVariable("id") Integer gameId) {
        scoreboardService.deleteScoreboardItem(gameId);
        return ResponseEntity.ok("Game with ID " + gameId + " has been successfully deleted.");
    }
}

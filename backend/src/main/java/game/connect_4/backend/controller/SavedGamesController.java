package game.connect_4.backend.controller;

import game.connect_4.backend.dto.SavedGamesItemDto;
import game.connect_4.backend.service.SavedGamesService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/saved-games")
@AllArgsConstructor
public class SavedGamesController {
    private SavedGamesService savedGamesService;

    @PostMapping
    public ResponseEntity<SavedGamesItemDto> createSavedGamesItem(@RequestBody SavedGamesItemDto itemDto) {
        SavedGamesItemDto savedItemDto = savedGamesService.createSavedGamesItem(itemDto);
        return new ResponseEntity<>(savedItemDto, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<SavedGamesItemDto> getSavedGamesItem(@PathVariable("id") Integer gameId) {
        SavedGamesItemDto itemDto = savedGamesService.getSavedGamesItem(gameId);
        return ResponseEntity.ok(itemDto);
    }

    @GetMapping
    public ResponseEntity<List<SavedGamesItemDto>> getLastTenSavedGames() {
        List<SavedGamesItemDto> itemDtoList = savedGamesService.getLastTenSavedGames();
        return ResponseEntity.ok(itemDtoList);
    }

    @PutMapping("{id}")
    public ResponseEntity<SavedGamesItemDto> updateSavedGamesItem(@PathVariable("id") Integer gameId,
                                                                  @RequestBody SavedGamesItemDto itemDto) {
        SavedGamesItemDto updatedItemDto = savedGamesService.updateSavedGamesItem(gameId, itemDto);
        return ResponseEntity.ok(updatedItemDto);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteSavedGamesItem(@PathVariable("id") Integer gameId) {
        savedGamesService.deleteSavedGamesItem(gameId);
        return ResponseEntity.ok("Game with ID " + gameId + " has been successfully deleted.");
    }
}

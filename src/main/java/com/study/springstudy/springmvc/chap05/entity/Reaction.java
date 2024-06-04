package com.study.springstudy.springmvc.chap05.entity;

import lombok.*;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Getter @ToString
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Builder
public class Reaction {
    private long reactionId;
    private long boardNo;
    private String account;
    private ReactionType reactionType;
    private LocalDateTime reactionDate;
}

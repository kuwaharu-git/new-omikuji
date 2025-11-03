// おみくじの結果データ
const fortuneData = {
    love: {
        title: "恋愛運",
        fortunes: {
            daikichi: {
                level: "大吉",
                message: "素晴らしい出会いがあります！",
                advice: "今日は積極的に行動することで、運命の人との出会いがあるかもしれません。笑顔を忘れずに、自分らしくいることが大切です。"
            },
            kichi: {
                level: "吉",
                message: "良い関係が築けそうです",
                advice: "相手の気持ちを大切にすることで、関係が深まります。焦らず、自然な流れに任せましょう。"
            },
            chukichi: {
                level: "中吉",
                message: "少しずつ進展します",
                advice: "急がず焦らず、少しずつ距離を縮めていきましょう。相手の話をよく聞くことが大切です。"
            },
            shokichi: {
                level: "小吉",
                message: "チャンスを逃さないで",
                advice: "小さなチャンスに気付くことが大切です。日々のコミュニケーションを大切にしましょう。"
            },
            kyo: {
                level: "凶",
                message: "焦りは禁物です",
                advice: "今は自分磨きの時期です。内面を充実させることで、次の機会に備えましょう。"
            }
        }
    },
    health: {
        title: "健康運",
        fortunes: {
            daikichi: {
                level: "大吉",
                message: "体調万全です！",
                advice: "今日は体調が良好です。この調子で健康的な生活を続けましょう。新しい運動を始めるのにも良い日です。"
            },
            kichi: {
                level: "吉",
                message: "元気いっぱいです",
                advice: "バランスの取れた食事と適度な運動を心がけましょう。規則正しい生活が幸運を呼びます。"
            },
            chukichi: {
                level: "中吉",
                message: "まずまずの体調です",
                advice: "無理をせず、休息を取ることも大切です。水分補給を忘れずに、体を労わりましょう。"
            },
            shokichi: {
                level: "小吉",
                message: "体調に気をつけて",
                advice: "睡眠不足に注意しましょう。早寝早起きを心がけ、栄養のある食事を取りましょう。"
            },
            kyo: {
                level: "凶",
                message: "休養が必要です",
                advice: "無理は禁物です。今日はゆっくり休んで、体力を回復させましょう。ストレス解消も大切です。"
            }
        }
    },
    career: {
        title: "仕事運",
        fortunes: {
            daikichi: {
                level: "大吉",
                message: "大きな成功が待っています！",
                advice: "新しいプロジェクトや提案が高く評価されます。自信を持って行動しましょう。上司や同僚との協力が鍵となります。"
            },
            kichi: {
                level: "吉",
                message: "順調に進みます",
                advice: "計画的に仕事を進めることで良い結果が得られます。周囲との協力を大切にしましょう。"
            },
            chukichi: {
                level: "中吉",
                message: "着実に前進します",
                advice: "小さな成果を積み重ねることが大切です。焦らず、丁寧な仕事を心がけましょう。"
            },
            shokichi: {
                level: "小吉",
                message: "努力が実ります",
                advice: "今は下積みの時期です。地道な努力が将来の成功につながります。継続は力なりです。"
            },
            kyo: {
                level: "凶",
                message: "慎重に行動しましょう",
                advice: "焦りは禁物です。確認を怠らず、ミスに気をつけましょう。困った時は相談することも大切です。"
            }
        }
    },
    money: {
        title: "金運",
        fortunes: {
            daikichi: {
                level: "大吉",
                message: "臨時収入の予感！",
                advice: "思わぬ収入があるかもしれません。ただし、浮かれすぎず、計画的に使いましょう。貯蓄も忘れずに。"
            },
            kichi: {
                level: "吉",
                message: "お金の流れが良いです",
                advice: "堅実な投資や貯蓄が吉です。無駄遣いを避け、将来のために備えましょう。"
            },
            chukichi: {
                level: "中吉",
                message: "安定した金運です",
                advice: "収支のバランスを保ちましょう。衝動買いに注意し、必要なものと欲しいものを見極めましょう。"
            },
            shokichi: {
                level: "小吉",
                message: "節約を心がけて",
                advice: "今は貯める時期です。小さな節約の積み重ねが、将来の大きな資産になります。"
            },
            kyo: {
                level: "凶",
                message: "出費に注意",
                advice: "無駄な出費を控えましょう。大きな買い物は時期を改めて。家計簿をつけることをおすすめします。"
            }
        }
    },
    general: {
        title: "総合運",
        fortunes: {
            daikichi: {
                level: "大吉",
                message: "最高の一日になります！",
                advice: "全てが順調に進みます。積極的に行動し、新しいことにチャレンジしましょう。周囲の人々との絆も深まります。"
            },
            kichi: {
                level: "吉",
                message: "良い一日になりそうです",
                advice: "前向きな気持ちで過ごしましょう。小さな幸せに気づくことができる日です。感謝の気持ちを忘れずに。"
            },
            chukichi: {
                level: "中吉",
                message: "穏やかな一日です",
                advice: "無理をせず、マイペースで過ごしましょう。周りの人に優しく接することで、運気が上がります。"
            },
            shokichi: {
                level: "小吉",
                message: "小さな幸運があります",
                advice: "日常の中に小さな幸せを見つけましょう。笑顔を心がけることで、運気が向上します。"
            },
            kyo: {
                level: "凶",
                message: "慎重に過ごしましょう",
                advice: "焦らず、落ち着いて行動しましょう。困難は成長のチャンスです。ポジティブな気持ちを持ち続けることが大切です。"
            }
        }
    }
};

// ランダムな運勢を選択する関数
function getRandomFortune(type) {
    const fortuneKeys = Object.keys(fortuneData[type].fortunes);
    const randomKey = fortuneKeys[Math.floor(Math.random() * fortuneKeys.length)];
    return {
        key: randomKey,
        ...fortuneData[type].fortunes[randomKey]
    };
}

// 画面を切り替える関数
function switchScreen(from, to) {
    document.getElementById(from).classList.remove('active');
    document.getElementById(to).classList.add('active');
}

// 結果を表示する関数
function displayResult(type) {
    const fortune = getRandomFortune(type);
    const title = fortuneData[type].title;

    document.getElementById('result-type').textContent = title;
    
    const fortuneLevelElement = document.getElementById('fortune-level');
    fortuneLevelElement.textContent = fortune.level;
    fortuneLevelElement.className = 'fortune-level ' + fortune.key;
    
    document.getElementById('fortune-message').textContent = fortune.message;
    document.getElementById('fortune-advice').textContent = fortune.advice;

    switchScreen('selection-screen', 'result-screen');
}

// イベントリスナーの設定
document.addEventListener('DOMContentLoaded', function() {
    // おみくじボタンのクリックイベント
    const omikujiButtons = document.querySelectorAll('.omikuji-btn');
    omikujiButtons.forEach(button => {
        button.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            displayResult(type);
        });
    });

    // もう一度引くボタンのクリックイベント
    document.getElementById('reset-btn').addEventListener('click', function() {
        switchScreen('result-screen', 'selection-screen');
    });
});

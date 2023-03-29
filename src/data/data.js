import { reactive } from "vue"

export const data = reactive({
    tests: [
    {
        name: 'Физические нагрузки',
        questions: [
            {
                name: 'Вопрос 1',
                options: ['Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'],
                answer: 2,
                selectedAnswer: null,
                passed: false
            },
            {
                name: 'Вопрос 2',
                options: ['Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'],
                answer: 3,
                selectedAnswer: null,
                passed: false
            },
            {
                name: 'Вопрос 3',
                options: ['Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'],
                answer: 0,
                selectedAnswer: null,
                passed: false
            },
            {
                name: 'Вопрос 4',
                options: ['Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'],
                answer: 2,
                selectedAnswer: null,
                passed: false
            },
            {
                name: 'Вопрос 5',
                options: ['Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'],
                answer: 3,
                selectedAnswer: null,
                passed: false
            },
        ],
        status: 'notpassed'
    },
    {
        name: 'Правильное питание',
        questions: [
            {
                name: 'Вопрос 1',
                options: ['Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'],
                answer: 2,
                selectedAnswer: null,           
                passed: false
            },
            {
                name: 'Вопрос 2',
                options: ['Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'],
                answer: 3,
                selectedAnswer: null,     
                passed: false
            },
            {
                name: 'Вопрос 3',
                options: ['Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'],
                answer: 0,
                selectedAnswer: null,
                passed: false
            },
            {
                name: 'Вопрос 4',
                options: ['Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'],
                answer: 2,
                selectedAnswer: null,
                passed: false
            },
            {
                name: 'Вопрос 5',
                options: ['Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'],
                answer: 0,
                selectedAnswer: null,
                passed: false
            },
        ],
        status: 'notpassed'
    },
    {
        name: 'Здоровый сон',
        questions: [
            {
                name: 'Вопрос 1',
                options: ['Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'],
                answer: 2,
                selectedAnswer: null,
                passed: false
            },
            {
                name: 'Вопрос 2',
                options: ['Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'],
                answer: 3,
                selectedAnswer: null,
                passed: false
            },
            {
                name: 'Вопрос 3',
                options: ['Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'],
                answer: 0,
                selectedAnswer: null,
                passed: false
            },
            {
                name: 'Вопрос 4',
                options: ['Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'],
                answer: 2,
                selectedAnswer: null,
                passed: false
            },
            {
                name: 'Вопрос 5',
                options: ['Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'],
                answer: 3,
                selectedAnswer: null,
                passed: false
            },
        ],
        status: 'notpassed'
    }
    ],
    totalDone: 0,
    increment() {
        this.totalDone++
    }
})

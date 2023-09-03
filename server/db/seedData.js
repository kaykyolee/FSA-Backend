//Date
const dates = [
    '08/31/2023',
    '09/01/2023',
    '09/02/2023',
    '09/03/2023',
    '09/04/2023'
]

//list
const lists= [
    'Eat Healthier',
    'Exercise More',
    'Learn Language',
    'Review Study',
    'Clean Up'
]


//Tasks
const tasks=[
    {title: 'Drink 8 cups of water', description:'Make sure to drink lukewarm water', priority:'3', status:true, notes:'need to change the water filter'},
    {title: 'Do yoga two times for 15 mins', description:'Better to do morning and night', priority:'2', status:false, notes:'try not to skip meditation part'},
    {title: 'Organize the summer clothes in the closet', description:'Need to sort out what to keep, donate, and throw away', priority:'1', status:true, notes:'make sure to put aside red dress for a friend'}
]


//Today's list
const todayslists=[
    {dateId: 1, listId: 1,TaskId: 1},
    {dateId: 2, listId: 2,TaskId: 2},
    {dateId: 3, listId: 5,TaskId: 3}
]

module.exports={dates, lists, tasks, todayslists}
//Print a second set of invitation messages, one for each person who is still in your list.
let guestlist : string[]=[`salman` ,`noman` , `zoya`]
let absentGuest =guestlist.pop()
console.log(`${absentGuest} , "can not make it do the dinner so i am planning to invite someone else`);
let newGuest = guestlist.push("sufyan")
const funcs = require('./fnevent');


test('view all events',async()=>{
    expect.assertions(1)
    const response =  await funcs.viewAllEvents()
    expect(response.data.data.length).toEqual(11)  
},10000)




test('view event by id',async()=>{
    id= "5ca8f53b48c3ef1cbce258d4"
    const response =  await funcs.viewEventById(id)
    expect.assertions(1)
    console.log(response.data.data)
    expect(response.data.data.Name).toBe("create testing")  
})


test('Update an Event',async ()=>{
    id= "5ca8ff5548c3ef1cbce258d7"
    const body={
        Name:"Updated1",
        Owner:"hamada updated",
        
    }
    expect.assertions(1)
    const response = await funcs.updateEventById(id,body)
    console.log("test return"+response.data.data)
    expect(response.data.data.Name).toBe(body.Name)

},10000)


test('Delete an event',async()=>{
    id= "5ca9005f48c3ef1cbce258da"
    expect.assertions(1)
    const response = await funcs.deleteEvent(id)
    expect(response.data.data.Name).toBe("Updated1")
},10000)



test('create event',async () =>{
    const body={
        Name:"create testing",
        Owner:"mid",
        Type:"lastName",
        Location:"alby",
        startDate:"ahmed"
    }
    expect.assertions(1)
    const response = await funcs.createEvent(body)
    gid= response.data.data.id;
    expect(response.data.data.Owner).toBe("mid")

})



    






import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const main = async () => {

    // const user = await prisma.user.create({data : {email : "Ritesh@gmail.com"}})
    // const user = await prisma.user.findFirst()
    // // const user = await prisma.user.deleteMany()
    // const user = await prisma.create({
    //     data : {
        
    //     }
    // })
    // await prisma.user.deleteMany()
    // const user = await prisma.user.create({
    //     data : {
    //         name : "ritesh",
    //         email : 'Ritesh7@outlook.com',
    //         age : 19,
    //         isAdmin : true,
    //         // userPreferences : {
    //         //     create : {
    //         //         emailUpdates : true
    //         //     }
    //         // }
    //     }, 
    //     // include : {
    //     //     userPreferences : true
    //     // }
    //     select : {
    //         name : true,
    //         email : true
    //     }
    // })

    // const user = await prisma.user.findMany()
    // const uniqueUser = await prisma.user.findUnique({
    //     where : {
    //         // email : "Ritesh7767@outlook.com"
    //         age_name : {
    //             age : 21,
    //             name : "ritesh"
    //         }
    //     }
    // })

    // const userName = await prisma.user.findFirst({
    //     where : {
    //         name : "ritesh"
    //     }
    // })

    // const user = await prisma.user.create({
    //     data : {
    //         name : "ritesh",
    //         age : 19,
    //         email : "ritesh@hotmail.com",
    //         isAdmin: false
    //     }
    // })

    // const allUsers = await prisma.user.findMany({
        // where : {
            // OR : [{name : {startsWith : "ritesh"}}, {email : {endsWith : "outlook.com"}}, {age : {gt : 20}}]
            // userPreferences : {
                // emailUpdates: true
            // }
            // name : {notIn : ["rites", 'vivek']},
            // age : {lt : 20}
            // email : {contains : "Ritesh7767@outlook.com"}
        // },
        // distinct : ["name", 'age'],
        // take : 2,
        // skip : 1,
        // orderBy : {
        //     age : "desc"
        // }
    // })
    // console.log(allUsers)
    // console.log(allUsers.length)
    // console.log(userName)
    // console.log(uniqueUser)
    // console.log(user)

    const udpatedUser = await prisma.user.updateMany({
        where : {
            // email : "Ritesh77@outlook.com"
            name : "new ritesh"
            // name : "ritesh"
        },
        data : {
            // email : "ritesh@gmail.com"
            age : {
                divide : 10
            }
        }
    })

    console.log(udpatedUser)

    const users = await prisma.user.findMany({
        where : {
            name : "new ritesh"
        }
    })

    console.log(users)
    // console.log(udpatedUser)



}

main()
.catch(error => console.error(error))
.finally(async () => {
    await prisma.$disconnect()
})
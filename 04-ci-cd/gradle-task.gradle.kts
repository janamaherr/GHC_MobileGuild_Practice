// Task: Use Copilot to add a custom Gradle task that cleans and builds the project.
tasks.register("customBuild") {
    doLast {
        println("Custom build logic here")
    }
}
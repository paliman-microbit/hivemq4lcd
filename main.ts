input.onButtonPressed(Button.A, function () {
    strip.clear()
    strip.show()
    KSRobot_IOT.MQTTPublish1(KSRobot_IOT.TOPIC.Topic0, "KEY A")
})
input.onButtonPressed(Button.B, function () {
    strip.clear()
    strip.show()
    KSRobot_IOT.MQTTPublish1(KSRobot_IOT.TOPIC.Topic0, "KEY B")
})
KSRobot_IOT.MQTT_Data1(KSRobot_IOT.TOPIC.Topic0, function (message) {
    if (message == "0") {
        strip = strip.range(0, 4)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (message == "1") {
        strip = strip.range(0, 4)
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    }
    if (message == "2") {
        strip = strip.range(0, 4)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (message == "3") {
        strip = strip.range(0, 4)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    strip.show()
    basic.showString(message)
})
let strip: neopixel.Strip = null
pins.digitalWritePin(DigitalPin.P0, 0)
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.show()
KSRobot_IOT.Wifi_setup(
SerialPin.P15,
SerialPin.P8,
"",
"",
KSRobot_IOT.IOT_Config.STATION
)
basic.showString(KSRobot_IOT.Get_IP())
KSRobot_IOT.MQTT_set(
"broker.hivemq.com",
1883,
"client888",
"",
""
)
KSRobot_IOT.MQTTSubscribe1(KSRobot_IOT.TOPIC.Topic0, "iot1")

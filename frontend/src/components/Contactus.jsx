import React from 'react'

const Contactus = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic"
        rel="stylesheet"
      />

      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n\n        :root{\n            --theme-color : #add8e6;\n        }\n        * {\n            font-family: Montserrat;\n        }\n\n        .contact-form {\n            height: 80vh;\n                        margin: 100px;\n            border-radius: 20px;\n            padding: 10px;\n\n                            }\n\n             .contact-form {\n                       width: 70%;\n            padding: 50px;\n            color: Black;\n            border-radius: 15px;\n            box-sizing: border-box;\n        }\n\n        .form-group {\n            display: flex;\n            gap: 10%;\n        }\n\n        .form-input{\n            /* background-color: black; */\n            width: 100%;\n            margin-bottom: 10px ;\n        }\n\n        .my-input{\n            display: block;\n            width: 100%;\n            box-sizing: border-box;\n            font-size: 20px;\n            padding: 5px;\n            border: none;\n            border-bottom: 2px solid gray;\n            outline: none;\n            margin-bottom: 20px ;\n        }\n\n        .my-btn{\n            padding: 20px 25px;\n            font-size: 1.1em;\n            border-radius: 10px;\n            background-color: #add8e6;\n            border: none;\n            color: white;\n            font-weight: bold;\n\n        }\n    "
        }}
      />


  

        <div className="contact-form">
          <h1>Contact BookHub</h1>

          <div className="form-group">
            <div className="form-input">
              <label>Your Name</label>
              <input type="text" className="my-input" />
            </div>
            <div className="form-input">
              <label>Your Email</label>
              <input type="text" className="my-input" />
            </div>
          </div>
          <div className="form-input">
            <label>Your Subject</label>
            <input type="text" className="my-input" />
          </div>
          <div className="form-input">
            <label>Message</label>
            <input type="text" className="my-input" />
            <textarea
              rows={4}
              type="text"
              className="my-input"
              defaultValue={""}
            />
          </div>

          <button className="btn btn-danger">Submit</button>

        </div>

      
      
      
    

    </>

  )
}

export default Contactus
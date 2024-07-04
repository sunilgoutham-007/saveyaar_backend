(function (React) {
    'use strict';

    function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

    var React__default = /*#__PURE__*/_interopDefault(React);

    const SubscriptionPlatformForm = () => {
      const [formData, setFormData] = React.useState({
        visibility: '',
        categoryId: '',
        logo: '',
        updatedBy: '',
        createdBy: '',
        renewalUrl: '',
        cancelUrl: '',
        websiteUrl: '',
        platformName: '',
        description: ''
      });
      const handleChange = e => {
        const {
          name,
          value
        } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
      const handleSubmit = e => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log('Form submitted:', formData);
      };
      return /*#__PURE__*/React__default.default.createElement("div", {
        className: "form-container",
        style: {
          maxWidth: '600px',
          margin: 'auto',
          padding: '20px'
        }
      }, /*#__PURE__*/React__default.default.createElement("form", {
        onSubmit: handleSubmit
      }, /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          marginBottom: '15px'
        }
      }, /*#__PURE__*/React__default.default.createElement("div", {
        className: "form-group",
        style: {
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between'
        }
      }, /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          flex: 1,
          marginRight: '10px'
        }
      }, /*#__PURE__*/React__default.default.createElement("label", {
        htmlFor: "platformName"
      }, "Platform Name*"), /*#__PURE__*/React__default.default.createElement("input", {
        type: "text",
        id: "platformName",
        name: "platformName",
        value: formData.platformName,
        onChange: handleChange,
        required: true,
        style: {
          width: '100%',
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }
      })), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          flex: 1,
          marginRight: '10px'
        }
      }, /*#__PURE__*/React__default.default.createElement("label", {
        htmlFor: "logo"
      }, "Logo"), /*#__PURE__*/React__default.default.createElement("input", {
        type: "text",
        id: "logo",
        name: "logo",
        value: formData.logo,
        onChange: handleChange,
        style: {
          width: '100%',
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }
      })), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/React__default.default.createElement("label", {
        htmlFor: "description"
      }, "Description"), /*#__PURE__*/React__default.default.createElement("input", {
        type: "text",
        id: "description",
        name: "description",
        value: formData.description,
        onChange: handleChange,
        style: {
          width: '100%',
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }
      })))), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '15px'
        }
      }, /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          flex: 1,
          marginRight: '10px'
        }
      }, /*#__PURE__*/React__default.default.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/React__default.default.createElement("label", {
        htmlFor: "categoryId"
      }, "Category ID"), /*#__PURE__*/React__default.default.createElement("input", {
        type: "text",
        id: "categoryId",
        name: "categoryId",
        value: formData.categoryId,
        onChange: handleChange,
        style: {
          width: 'calc(100% - 40px)',
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }
      }), /*#__PURE__*/React__default.default.createElement("button", {
        type: "button",
        style: {
          marginLeft: '10px',
          padding: '8px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }
      }, "Add"))), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/React__default.default.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/React__default.default.createElement("label", {
        htmlFor: "websiteUrl"
      }, "Website URL"), /*#__PURE__*/React__default.default.createElement("input", {
        type: "url",
        id: "websiteUrl",
        name: "websiteUrl",
        value: formData.websiteUrl,
        onChange: handleChange,
        style: {
          width: '100%',
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }
      })))), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          marginBottom: '15px'
        }
      }, /*#__PURE__*/React__default.default.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/React__default.default.createElement("label", {
        htmlFor: "visibility"
      }, "Visibility*"), /*#__PURE__*/React__default.default.createElement("select", {
        id: "visibility",
        name: "visibility",
        value: formData.visibility,
        onChange: handleChange,
        required: true,
        style: {
          width: '100%',
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }
      }, /*#__PURE__*/React__default.default.createElement("option", {
        value: ""
      }, "Select..."), /*#__PURE__*/React__default.default.createElement("option", {
        value: "public"
      }, "Public"), /*#__PURE__*/React__default.default.createElement("option", {
        value: "private"
      }, "Private")))), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '15px'
        }
      }, /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          flex: 1,
          marginRight: '10px'
        }
      }, /*#__PURE__*/React__default.default.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/React__default.default.createElement("label", {
        htmlFor: "updatedBy"
      }, "Updated By"), /*#__PURE__*/React__default.default.createElement("input", {
        type: "text",
        id: "updatedBy",
        name: "updatedBy",
        value: formData.updatedBy,
        onChange: handleChange,
        style: {
          width: '100%',
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }
      }))), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/React__default.default.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/React__default.default.createElement("label", {
        htmlFor: "createdBy"
      }, "Created By"), /*#__PURE__*/React__default.default.createElement("input", {
        type: "text",
        id: "createdBy",
        name: "createdBy",
        value: formData.createdBy,
        onChange: handleChange,
        style: {
          width: '100%',
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }
      })))), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '15px'
        }
      }, /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          flex: 1,
          marginRight: '10px'
        }
      }, /*#__PURE__*/React__default.default.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/React__default.default.createElement("label", {
        htmlFor: "renewalUrl"
      }, "Renewal URL"), /*#__PURE__*/React__default.default.createElement("input", {
        type: "url",
        id: "renewalUrl",
        name: "renewalUrl",
        value: formData.renewalUrl,
        onChange: handleChange,
        style: {
          width: '100%',
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }
      }))), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/React__default.default.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/React__default.default.createElement("label", {
        htmlFor: "cancelUrl"
      }, "Cancel URL"), /*#__PURE__*/React__default.default.createElement("input", {
        type: "url",
        id: "cancelUrl",
        name: "cancelUrl",
        value: formData.cancelUrl,
        onChange: handleChange,
        style: {
          width: '100%',
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }
      })))), /*#__PURE__*/React__default.default.createElement("button", {
        type: "submit",
        style: {
          width: '100%',
          padding: '10px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }
      }, "Save")));
    };

    AdminJS.UserComponents = {};
    AdminJS.UserComponents.SubscriptionPlatformForm = SubscriptionPlatformForm;

})(React);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9kaXN0L2NvbXBvbmVudHMvU3Vic2NyaXB0aW9uUGxhdGZvcm1Gb3JtLmpzeCIsImVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IFN1YnNjcmlwdGlvblBsYXRmb3JtRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgdmlzaWJpbGl0eTogJycsXG4gICAgICAgIGNhdGVnb3J5SWQ6ICcnLFxuICAgICAgICBsb2dvOiAnJyxcbiAgICAgICAgdXBkYXRlZEJ5OiAnJyxcbiAgICAgICAgY3JlYXRlZEJ5OiAnJyxcbiAgICAgICAgcmVuZXdhbFVybDogJycsXG4gICAgICAgIGNhbmNlbFVybDogJycsXG4gICAgICAgIHdlYnNpdGVVcmw6ICcnLFxuICAgICAgICBwbGF0Zm9ybU5hbWU6ICcnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgfSk7XG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgICAgIHNldEZvcm1EYXRhKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZVxuICAgICAgICB9KSk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIEhlcmUgeW91IHdvdWxkIHR5cGljYWxseSBzZW5kIHRoZSBkYXRhIHRvIHlvdXIgYmFja2VuZFxuICAgICAgICBjb25zb2xlLmxvZygnRm9ybSBzdWJtaXR0ZWQ6JywgZm9ybURhdGEpO1xuICAgIH07XG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udGFpbmVyXCIgc3R5bGU9e3sgbWF4V2lkdGg6ICc2MDBweCcsIG1hcmdpbjogJ2F1dG8nLCBwYWRkaW5nOiAnMjBweCcgfX0+XG5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzE1cHgnIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4Jywgd2lkdGg6ICcxMDAlJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSwgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fT5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwbGF0Zm9ybU5hbWVcIj5QbGF0Zm9ybSBOYW1lKjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicGxhdGZvcm1OYW1lXCIgbmFtZT1cInBsYXRmb3JtTmFtZVwiIHZhbHVlPXtmb3JtRGF0YS5wbGF0Zm9ybU5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHJlcXVpcmVkIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6ICc4cHgnLCBib3JkZXI6ICcxcHggc29saWQgI2NjYycsIGJvcmRlclJhZGl1czogJzRweCcgfX0vPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSwgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fT5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsb2dvXCI+TG9nbzwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibG9nb1wiIG5hbWU9XCJsb2dvXCIgdmFsdWU9e2Zvcm1EYXRhLmxvZ299IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6ICc4cHgnLCBib3JkZXI6ICcxcHggc29saWQgI2NjYycsIGJvcmRlclJhZGl1czogJzRweCcgfX0vPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSB9fT5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJkZXNjcmlwdGlvblwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIHZhbHVlPXtmb3JtRGF0YS5kZXNjcmlwdGlvbn0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcGFkZGluZzogJzhweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjY2NjJywgYm9yZGVyUmFkaXVzOiAnNHB4JyB9fS8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgbWFyZ2luQm90dG9tOiAnMTVweCcgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxLCBtYXJnaW5SaWdodDogJzEwcHgnIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2F0ZWdvcnlJZFwiPkNhdGVnb3J5IElEPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjYXRlZ29yeUlkXCIgbmFtZT1cImNhdGVnb3J5SWRcIiB2YWx1ZT17Zm9ybURhdGEuY2F0ZWdvcnlJZH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gc3R5bGU9e3sgd2lkdGg6ICdjYWxjKDEwMCUgLSA0MHB4KScsIHBhZGRpbmc6ICc4cHgnLCBib3JkZXI6ICcxcHggc29saWQgI2NjYycsIGJvcmRlclJhZGl1czogJzRweCcgfX0vPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTBweCcsIHBhZGRpbmc6ICc4cHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjNENBRjUwJywgY29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnLCBib3JkZXJSYWRpdXM6ICc0cHgnLCBjdXJzb3I6ICdwb2ludGVyJyB9fT5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwid2Vic2l0ZVVybFwiPldlYnNpdGUgVVJMPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ1cmxcIiBpZD1cIndlYnNpdGVVcmxcIiBuYW1lPVwid2Vic2l0ZVVybFwiIHZhbHVlPXtmb3JtRGF0YS53ZWJzaXRlVXJsfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnOHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNjY2MnLCBib3JkZXJSYWRpdXM6ICc0cHgnIH19Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzE1cHgnIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ2aXNpYmlsaXR5XCI+VmlzaWJpbGl0eSo8L2xhYmVsPlxuICAgICAgICAgICAgPHNlbGVjdCBpZD1cInZpc2liaWxpdHlcIiBuYW1lPVwidmlzaWJpbGl0eVwiIHZhbHVlPXtmb3JtRGF0YS52aXNpYmlsaXR5fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSByZXF1aXJlZCBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnOHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNjY2MnLCBib3JkZXJSYWRpdXM6ICc0cHgnIH19PlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0Li4uPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwdWJsaWNcIj5QdWJsaWM8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaXZhdGVcIj5Qcml2YXRlPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIG1hcmdpbkJvdHRvbTogJzE1cHgnIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSwgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVwZGF0ZWRCeVwiPlVwZGF0ZWQgQnk8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInVwZGF0ZWRCeVwiIG5hbWU9XCJ1cGRhdGVkQnlcIiB2YWx1ZT17Zm9ybURhdGEudXBkYXRlZEJ5fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnOHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNjY2MnLCBib3JkZXJSYWRpdXM6ICc0cHgnIH19Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY3JlYXRlZEJ5XCI+Q3JlYXRlZCBCeTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY3JlYXRlZEJ5XCIgbmFtZT1cImNyZWF0ZWRCeVwiIHZhbHVlPXtmb3JtRGF0YS5jcmVhdGVkQnl9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6ICc4cHgnLCBib3JkZXI6ICcxcHggc29saWQgI2NjYycsIGJvcmRlclJhZGl1czogJzRweCcgfX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBtYXJnaW5Cb3R0b206ICcxNXB4JyB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEsIG1hcmdpblJpZ2h0OiAnMTBweCcgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZW5ld2FsVXJsXCI+UmVuZXdhbCBVUkw8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInVybFwiIGlkPVwicmVuZXdhbFVybFwiIG5hbWU9XCJyZW5ld2FsVXJsXCIgdmFsdWU9e2Zvcm1EYXRhLnJlbmV3YWxVcmx9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6ICc4cHgnLCBib3JkZXI6ICcxcHggc29saWQgI2NjYycsIGJvcmRlclJhZGl1czogJzRweCcgfX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjYW5jZWxVcmxcIj5DYW5jZWwgVVJMPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ1cmxcIiBpZD1cImNhbmNlbFVybFwiIG5hbWU9XCJjYW5jZWxVcmxcIiB2YWx1ZT17Zm9ybURhdGEuY2FuY2VsVXJsfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnOHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNjY2MnLCBib3JkZXJSYWRpdXM6ICc0cHgnIH19Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnMTBweCcsIGJhY2tncm91bmRDb2xvcjogJyM0Q0FGNTAnLCBjb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIGJvcmRlclJhZGl1czogJzRweCcsIGN1cnNvcjogJ3BvaW50ZXInIH19PlNhdmU8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj4pO1xufTtcbmV4cG9ydCBkZWZhdWx0IFN1YnNjcmlwdGlvblBsYXRmb3JtRm9ybTtcbiIsIkFkbWluSlMuVXNlckNvbXBvbmVudHMgPSB7fVxuaW1wb3J0IFN1YnNjcmlwdGlvblBsYXRmb3JtRm9ybSBmcm9tICcuLi9kaXN0L2NvbXBvbmVudHMvU3Vic2NyaXB0aW9uUGxhdGZvcm1Gb3JtJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5TdWJzY3JpcHRpb25QbGF0Zm9ybUZvcm0gPSBTdWJzY3JpcHRpb25QbGF0Zm9ybUZvcm0iXSwibmFtZXMiOlsiU3Vic2NyaXB0aW9uUGxhdGZvcm1Gb3JtIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInVzZVN0YXRlIiwidmlzaWJpbGl0eSIsImNhdGVnb3J5SWQiLCJsb2dvIiwidXBkYXRlZEJ5IiwiY3JlYXRlZEJ5IiwicmVuZXdhbFVybCIsImNhbmNlbFVybCIsIndlYnNpdGVVcmwiLCJwbGF0Zm9ybU5hbWUiLCJkZXNjcmlwdGlvbiIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2U3RhdGUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzdHlsZSIsIm1heFdpZHRoIiwibWFyZ2luIiwicGFkZGluZyIsIm9uU3VibWl0IiwibWFyZ2luQm90dG9tIiwiZGlzcGxheSIsIndpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4IiwibWFyZ2luUmlnaHQiLCJodG1sRm9yIiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsIm1hcmdpbkxlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImN1cnNvciIsIkFkbWluSlMiLCJVc2VyQ29tcG9uZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQUNBLE1BQU1BLHdCQUF3QixHQUFHQSxNQUFNO0lBQ25DLEVBQUEsTUFBTSxDQUFDQyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHQyxjQUFRLENBQUM7SUFDckNDLElBQUFBLFVBQVUsRUFBRSxFQUFFO0lBQ2RDLElBQUFBLFVBQVUsRUFBRSxFQUFFO0lBQ2RDLElBQUFBLElBQUksRUFBRSxFQUFFO0lBQ1JDLElBQUFBLFNBQVMsRUFBRSxFQUFFO0lBQ2JDLElBQUFBLFNB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
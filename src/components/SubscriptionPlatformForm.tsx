import React, { useState } from 'react';

const SubscriptionPlatformForm = () => {
  const [formData, setFormData] = useState({
    visibility: '',
    categoryId: '',
    logo: '',
    updatedBy: '',
    createdBy: '',
    renewalUrl: '',
    cancelUrl: '',
    websiteUrl: '',
    platformName: '',
    description: '',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
  };

  return (
    <div className="form-container" style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <div className="form-group" style={{ display: 'flex' ,width: '100%' , justifyContent: 'space-between' }}>
            <div style={{ flex: 1, marginRight: '10px' }}>
              <label htmlFor="platformName">Platform Name*</label>
              <input
                type="text"
                id="platformName"
                name="platformName"
                value={formData.platformName}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
              />
            </div>

            <div style={{ flex: 1, marginRight: '10px' }}>
              <label htmlFor="logo">Logo</label>
              <input
                type="text"
                id="logo"
                name="logo"
                value={formData.logo}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
              />
            </div>

            <div style={{ flex: 1 }}>
              <label htmlFor="description">Description</label>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
              />
            </div>

          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
          <div style={{ flex: 1, marginRight: '10px' }}>
            <div className="form-group">
              <label htmlFor="categoryId">Category ID</label>
              <input
                type="text"
                id="categoryId"
                name="categoryId"
                value={formData.categoryId}
                onChange={handleChange}
                style={{ width: 'calc(100% - 40px)', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
              />
              <button type="button" style={{ marginLeft: '10px', padding: '8px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add</button>
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <div className="form-group">
              <label htmlFor="websiteUrl">Website URL</label>
              <input
                type="url"
                id="websiteUrl"
                name="websiteUrl"
                value={formData.websiteUrl}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
              />
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <div className="form-group">
            <label htmlFor="visibility">Visibility*</label>
            <select
              id="visibility"
              name="visibility"
              value={formData.visibility}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            >
              <option value="">Select...</option>
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
          <div style={{ flex: 1, marginRight: '10px' }}>
            <div className="form-group">
              <label htmlFor="updatedBy">Updated By</label>
              <input
                type="text"
                id="updatedBy"
                name="updatedBy"
                value={formData.updatedBy}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
              />
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <div className="form-group">
              <label htmlFor="createdBy">Created By</label>
              <input
                type="text"
                id="createdBy"
                name="createdBy"
                value={formData.createdBy}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
              />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
          <div style={{ flex: 1, marginRight: '10px' }}>
            <div className="form-group">
              <label htmlFor="renewalUrl">Renewal URL</label>
              <input
                type="url"
                id="renewalUrl"
                name="renewalUrl"
                value={formData.renewalUrl}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
              />
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <div className="form-group">
              <label htmlFor="cancelUrl">Cancel URL</label>
              <input
                type="url"
                id="cancelUrl"
                name="cancelUrl"
                value={formData.cancelUrl}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
              />
            </div>
          </div>
        </div>

        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Save</button>
      </form>
    </div>
  );
};

export default SubscriptionPlatformForm;
